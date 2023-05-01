const UserScore = require('../models/userScore.model');
const {
  successResponse,
  errorResponse,
  statusCodes,
} = require('../utils/responses');

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
    successResponse(res, {
      message: 'Score fetched successfully!',
      data: scores,
    });
  } catch (err) {
    errorResponse(res, {
      message: 'Something went wrong!, Try again after some time!',
      statusCode: statusCodes.INTERNAL_SERVER_ERROR,
    });
  }
};
