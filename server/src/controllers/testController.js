const { Types } = require('mongoose');
const Question = require('../models/questions.model');
const Test = require('../models/test.modal');
const logger = require('../services/logger');
const UserScore = require('../models/userScore.model');
const {
  successResponse,
  errorResponse,
  statusCodes,
} = require('../utils/responses');

exports.createTest = async (req, res, next) => {
  try {
    const { testName, language } = req.body;

    const newTest = new Test({
      testName,
      language,
    });
    await newTest.save();
    successResponse(res, {
      message: `Test named ${testName} created successfully`,
    });
  } catch (err) {
    errorResponse(res, {
      message: 'Something went wrong!, Try again after some time!',
      statusCode: statusCodes.INTERNAL_SERVER_ERROR,
    });
  }
};

exports.getTests = async (req, res, next) => {
  try {
    const language = req.query.language;
    const tests = await Test.find(
      language ? { language: req.query.language } : {},
    );
    successResponse(res, {
      message: `Test data fetched successfully!`,
      data: tests,
    });
  } catch (err) {
    errorResponse(res, {
      message: 'Something went wrong!, Try again after some time!',
      statusCode: statusCodes.INTERNAL_SERVER_ERROR,
    });
  }
};

exports.submitTest = async (req, res, next) => {
  try {
    const { testId, testData } = req.body;
    const result = {
      userId: req.userData.userId,
      testId: testId,
    };
    const questionsByTest = await Question.aggregate([
      { $match: { testId: Types.ObjectId(testId) } },
      { $unwind: '$answers' },
      { $match: { 'answers.isCorrect': true } },
      { $project: { _id: 0, questionId: '$_id', answerId: '$answers._id' } },
    ]);
    const evaluation = questionsByTest?.reduce(
      (acc, curr) => {
        const isMatch = testData?.findIndex(
          (e) =>
            e?.questionId.toString() === curr?.questionId.toString() &&
            e?.answerId.toString() === curr?.answerId.toString(),
        );
        return isMatch >= 0
          ? {
              testScore: acc.testScore + 1,
              score: acc.score + 1,
            }
          : {
              testScore: acc.testScore + 1,
              score: acc.score,
            };
      },
      { testScore: 0, score: 0 },
    );
    const scoreData = { ...evaluation };
    scoreData.percentage = (evaluation.score / evaluation.testScore) * 100;
    result.scoreDetails = scoreData;
    const scoreToSave = new UserScore(result);
    await scoreToSave.save();
    successResponse(res, {
      message: `Test submitted successfully!`,
    });
  } catch (err) {
    errorResponse(res, {
      message: 'Something went wrong!, Try again after some time!',
      statusCode: statusCodes.INTERNAL_SERVER_ERROR,
    });
  }
};
