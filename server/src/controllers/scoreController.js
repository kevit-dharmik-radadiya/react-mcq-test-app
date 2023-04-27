const UserScore = require('../models/userScore.model');
const logger = require('../services/logger');

exports.getScores = async (req, res, next) => {
  try {
    let scores = await UserScore.find({
      userId: req.userData.userId,
    })
      .populate({ path: 'testId', select: '_id testName language' })
      .lean();
    scores = scores.map((score) => {
      const { testId, ...rest } = score;
      return { testDetails: testId, ...rest };
    });
    logger.log.info('Score Details', scores);
    res.status(200).json({
      message: 'Score fetched successfully!',
      data: scores,
      success: true,
    });
  } catch (err) {
    logger.log.error('500 - Get User Details', err);
    res.status(500).json({ message: 'Something went wrong!', success: false });
  }
};
