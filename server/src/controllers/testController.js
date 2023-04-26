const Test = require('../models/test.modal');
const logger = require('../services/logger');

exports.createTest = async (req, res, next) => {
  try {
    const { testName, language } = req.body;

      const newTest = new Test({
        testName,
        language,
      });
      const result = await newTest.save();
      logger.log.info('Test Created', result);
      res.status(201).json({ message: 'Test created', success: true });
  } catch (err) {
    logger.log.error('500 - test creation', err);
    res.status(500).json({ message: 'Something went wrong!', success: false });
  }
};