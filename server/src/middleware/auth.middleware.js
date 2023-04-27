const jwt = require('jsonwebtoken');
const logger = require('../services/logger');

module.exports = (req, res, next) => {
  try {
    // Check if a token was provided in the request header
    const token = req.headers.authorization.split(' ')[1];
    if (!token) {
      return res.status(401).json({ message: 'Authentication failed!' });
    }

    // Verify the token using the secret key
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    // Attach the decoded token to the request object for use in other middleware functions
    req.userData = decoded;

    // Call the next middleware function
    next();
  } catch (err) {
    logger.log.error('Error at auth middleware', err);
    return res.status(401).json({ message: 'Authentication failed!' });
  }
};
