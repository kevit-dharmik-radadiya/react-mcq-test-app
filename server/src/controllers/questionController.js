const Question = require('../models/questions.model');
const { successResponse, errorResponse } = require('../utils/responses');

exports.addQuestions = async (req, res, next) => {
  try {
    await Question.create(req.body);
    successResponse(res, {
      message: `Questions added successfully!`,
    });
  } catch (err) {
    errorResponse(res, {
      message: 'Something went wrong!, Try again after some time!',
      statusCode: statusCodes.INTERNAL_SERVER_ERROR,
    });
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
    successResponse(res, {
      message: `Question fetched successfully!`,
      data: response,
    });
  } catch (err) {
    errorResponse(res, {
      message: 'Something went wrong!, Try again after some time!',
      statusCode: statusCodes.INTERNAL_SERVER_ERROR,
    });
  }
};
