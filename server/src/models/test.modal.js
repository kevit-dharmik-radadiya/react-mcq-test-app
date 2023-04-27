const mongoose = require('mongoose');

const testSchema = new mongoose.Schema({
  testName: String,
  language: String,
  createdAt: { type: Date, default: Date.now },
});

const Test = mongoose.model('Test', testSchema);

module.exports = Test;
