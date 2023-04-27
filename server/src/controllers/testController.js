const { Types } = require('mongoose');
const Question = require('../models/questions.model');
const Test = require('../models/test.modal');
const logger = require('../services/logger');
const UserScore = require('../models/userScore.model');

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
    res.status(200).json({
      message: 'Tests submitted successfully!',
      success: true,
    });
  } catch (err) {
    logger.log.error('500 - test creation', err);
    res.status(500).json({ message: 'Something went wrong!', success: false });
  }
};
