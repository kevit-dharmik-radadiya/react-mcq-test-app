const mongoose = require('mongoose');

const answerSchema = new mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  answerText: String,
  isCorrect: Boolean,
});

const questionSchema = new mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  testId: { type: mongoose.Schema.Types.ObjectId, ref: 'Test' },
  questionText: String,
  answers: [answerSchema],
});

const Question = mongoose.model('Question', questionSchema);

module.exports = Question;
