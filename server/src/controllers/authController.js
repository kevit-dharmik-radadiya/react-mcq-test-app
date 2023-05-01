const jwt = require('jsonwebtoken');
const User = require('../models/user.model');
const logger = require('../services/logger');
const bcrypt = require('bcrypt');
const { randomBytes } = require('crypto');
const { sendResetPasswordEmail } = require('../services/mail');
const {
  successResponse,
  errorResponse,
  statusCodes,
} = require('../utils/responses');

exports.signup = async (req, res, next) => {
  try {
    const { email, password, userName } = req.body;
    const user = await User.findOne({ email });
    if (user) {
      errorResponse(res, {
        message: 'Email already exists!',
        statusCode: statusCodes.BAD_REQUEST,
      });
    } else {
      const hashedPassword = await bcrypt.hash(password, 10);
      const newUser = new User({
        userName,
        email,
        password: hashedPassword,
      });
      const result = await newUser.save();
      successResponse(res, {
        message: `Signup as ${email} successful!`,
        data: result,
      });
    }
  } catch (err) {
    console.log(err);
    errorResponse(res, {
      message: 'Something went wrong!, Try again after some time!',
      statusCode: statusCodes.INTERNAL_SERVER_ERROR,
    });
  }
};

exports.login = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user) {
      errorResponse(res, {
        message: 'User does not exists!',
        statusCode: statusCodes.BAD_REQUEST,
      });
    } else {
      const passwordMatched = await bcrypt.compare(password, user.password);
      if (!passwordMatched) {
        return res.status(400).json({
          message: 'Authantication failed!',
          success: false,
        });
      } else {
        const token = jwt.sign(
          {
            email,
            userId: user._id,
          },
          process.env.JWT_SECRET,
          { expiresIn: '1h' },
        );
        const data = {
          _id: user._id,
          userName: user.userName,
          email: user.email,
          token,
        };
        const result = await User.findByIdAndUpdate(
          { _id: user._id },
          { lastLoginAt: Date.now() },
        );
        successResponse(res, {
          message: 'Authantication successful!',
          data: data,
        });
      }
    }
  } catch (err) {
    errorResponse(res, {
      message: 'Something went wrong!, Try again after some time!',
      statusCode: statusCodes.INTERNAL_SERVER_ERROR,
    });
  }
};

exports.forgotPassword = async (req, res, next) => {
  try {
    const { email } = req.body;
    const user = await User.findOne({ email });
    if (!user) {
      errorResponse(res, {
        message: 'User does not exists!',
        statusCode: statusCodes.BAD_REQUEST,
      });
    } else {
      const token = randomBytes(20).toString('hex');
      user.resetPasswordToken = token;
      user.resetPasswordExpires = Date.now() + 1000 * 60 * 60; // 1 hour
      await user.save();
      const resetLink = `http://${req.headers.host}/auth/resetPassword/${token}`;
      await sendResetPasswordEmail(user.email, resetLink);
      successResponse(res, {
        message: 'Reset password link sent to email!',
      });
    }
  } catch (err) {
    errorResponse(res, {
      message: 'Something went wrong!, Try again after some time!',
      statusCode: statusCodes.INTERNAL_SERVER_ERROR,
    });
  }
};

exports.resetPassword = async (req, res, next) => {
  try {
    const { email, token, password } = req.body;

    const user = await User.findOne({ email });

    if (!user) {
      errorResponse(res, {
        message: 'User does not exists!',
        statusCode: statusCodes.BAD_REQUEST,
      });
    }

    if (user.resetPasswordToken !== token) {
      errorResponse(res, {
        message: 'Invalid token!',
        statusCode: statusCodes.BAD_REQUEST,
      });
    }

    if (Date.now() > user.resetPasswordExpires) {
      errorResponse(res, {
        message: 'Token has expired!',
        statusCode: statusCodes.BAD_REQUEST,
      });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    user.password = hashedPassword;
    user.resetPasswordToken = undefined;
    user.resetPasswordExpires = undefined;
    await user.save();

    successResponse(res, {
      message: 'Password reset successful!',
    });
  } catch (err) {
    errorResponse(res, {
      message: 'Something went wrong!, Try again after some time!',
      statusCode: statusCodes.INTERNAL_SERVER_ERROR,
    });
  }
};
