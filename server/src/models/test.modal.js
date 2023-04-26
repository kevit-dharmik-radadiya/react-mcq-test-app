const mongoose = require('mongoose');

const testSchema = new mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  testName: String,
  createdAt: { type: Date, default: Date.now },
});

const Test = mongoose.model('Test', testSchema);

module.exports = Test;
