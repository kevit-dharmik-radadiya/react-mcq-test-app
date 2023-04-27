const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  password: String,
  email: String,
  userName: String,
  createdAt: { type: Date, default: Date.now },
  lastLoginAt: Date,
});

const User = mongoose.model('User', userSchema);

module.exports = User;
