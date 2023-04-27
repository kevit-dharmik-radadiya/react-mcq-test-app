const mongoose = require('mongoose');

const userScoreSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  testId: { type: mongoose.Schema.Types.ObjectId, ref: 'Test' },
  scoreDetails: {testScore: Number, score: Number, percentage: Number},
  dateTaken: { type: Date, default: Date.now },
});

const UserScore = mongoose.model('UserScore', userScoreSchema);

module.exports = UserScore;
