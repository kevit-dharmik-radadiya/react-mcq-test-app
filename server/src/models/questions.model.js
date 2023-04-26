const mongoose = require('mongoose');

const answerSchema = new mongoose.Schema({
  answerText: String,
  isCorrect: Boolean,
});

const questionSchema = new mongoose.Schema({
  testId: { type: mongoose.Schema.Types.ObjectId, ref: 'Test' },
  questionText: String,
  answers: [answerSchema],
});

const Question = mongoose.model('Question', questionSchema);

module.exports = Question;
