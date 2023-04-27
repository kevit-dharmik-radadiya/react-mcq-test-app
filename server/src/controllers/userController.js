const User = require('../models/user.model');
const logger = require('../services/logger');

exports.getUserDetails = async (req, res, next) => {
  try {
    const user = await User.findById(req.params.id);
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    const { userName, email, lastLoginAt, _id } = user;
    const response = {
      _id,
      userName,
      email,
      lastLoginAt,
    };
    logger.log.info('User Details', response);
    res.status(200).json(response);
  } catch (err) {
    logger.log.error('500 - Get User Details', err);
    res.status(500).json({ message: 'Something went wrong!', success: false });
  }
};
