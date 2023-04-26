const Question = require('../models/questions.model');
const Test = require('../models/test.modal');
const logger = require('../services/logger');

exports.addQuestions = async (req, res, next) => {
  try {
    const result = await Question.create(req.body);
    logger.log.info('Questions added', result);
    res.status(201).json({ message: 'Questions created', success: true });
  } catch (err) {
    logger.log.error('500 - Questions creation', err);
    res.status(500).json({ message: 'Something went wrong!', success: false });
  }
};
