const jwt = require('jsonwebtoken');
const User = require('../models/user.model');
const logger = require('../services/logger');
const bcrypt = require('bcrypt');

exports.signup = async (req, res, next) => {
  try {
    const { email, password, userName } = req.body;
    const user = await User.findOne({ email });
    if (user) {
      return res.status(400).json({
        message: 'Email already exists!',
        success: false,
      });
    } else {
      const hashedPassword = await bcrypt.hash(password, 10);
      const newUser = new User({
        userName,
        email,
        password: hashedPassword,
      });
      const result = await newUser.save();
      logger.log.info('User Created', result);
      res.status(201).json({ message: 'User created', success: true });
    }
  } catch (err) {
    logger.log.error('500 - user creation', err);
    res.status(500).json({ message: 'Something went wrong!', success: false });
  }
};

exports.login = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({
        message: 'User does not exists!',
        success: false,
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
        console.log(result);
        res
          .status(201)
          .json({ message: 'Authantication successful!', data, success: true });
      }
    }
  } catch (err) {
    logger.log.error('500 - user creation', err);
    res.status(500).json({ message: 'Something went wrong!', success: false });
  }
};
