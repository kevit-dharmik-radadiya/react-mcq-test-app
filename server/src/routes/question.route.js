const express = require('express');
const authMiddleware = require('../middleware/auth.middleware');
const {
  addQuestions,
  getQuestionsByTest,
} = require('../controllers/questionController');

const router = express.Router();

router.post('/addQuestions', authMiddleware, addQuestions);
router.get('/getQuestionsByTest/:testId', authMiddleware, getQuestionsByTest);

module.exports = router;
