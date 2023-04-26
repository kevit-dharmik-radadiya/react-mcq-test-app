const mongoose = require('mongoose');

const userScoreSchema = new mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  testId: { type: mongoose.Schema.Types.ObjectId, ref: 'Test' },
  score: Number,
  dateTaken: { type: Date, default: Date.now },
  lastLoggedInAt: Date
});

const UserScore = mongoose.model('UserScore', userScoreSchema);

module.exports = UserScore;
