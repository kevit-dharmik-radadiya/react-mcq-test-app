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

exports.getTests = async (req, res, next) => {
  try {
    const language = req.query.language;
    const tests = await Test.find(
      language ? { language: req.query.language } : {},
    );
    logger.log.info('Test Details', tests);
    res.status(200).json({
      message: 'Tests fetched successfully!',
      data: tests || [],
      success: true,
    });
  } catch (err) {
    logger.log.error('500 - test creation', err);
    res.status(500).json({ message: 'Something went wrong!', success: false });
  }
};
