const User = require('../models/user.model');
const {
  errorResponse,
  successResponse,
  statusCodes,
} = require('../utils/responses');

exports.getUserDetails = async (req, res, next) => {
  try {
    const user = await User.findById(req.params.id);
    if (!user) {
      errorResponse(res, {
        message: 'User does not exist!',
        statusCode: statusCodes.BAD_REQUEST,
      });
    }
    const { userName, email, lastLoginAt, _id } = user;
    const response = {
      _id,
      userName,
      email,
      lastLoginAt,
    };
    successResponse(res, {
      message: `User details fetched successfully!`,
      data: response,
    });
  } catch (err) {
    errorResponse(res, {
      message: 'Something went wrong!, Try again after some time!',
      statusCode: statusCodes.INTERNAL_SERVER_ERROR,
    });
  }
};
