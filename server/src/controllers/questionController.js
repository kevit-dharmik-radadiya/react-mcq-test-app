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

exports.getQuestionsByTest = async (req, res, next) => {
  try {
    const { testId } = req.params;
    const result = await Question.find({ testId: testId });
    const response = result.map((e, index) => ({
      _id: e._id,
      number: index + 1,
      question: e.questionText,
      options: e.answers.map((ans) => ({ _id: ans._id, text: ans.answerText })),
    }));
    logger.log.info('Fetched questions by test' + testId, response);
    res.status(201).json({
      message: 'Questions fetched successfully!',
      data: response || [],
      success: true,
    });
  } catch (err) {
    logger.log.error('500 - Questions fetch', err);
    res.status(500).json({ message: 'Something went wrong!', success: false });
  }
};
