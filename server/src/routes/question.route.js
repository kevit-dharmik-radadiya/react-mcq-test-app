const express = require('express');
const authMiddleware = require('../middleware/auth.middleware');
const { addQuestions } = require('../controllers/questionController');

const router = express.Router();

router.post('/addQuestions', authMiddleware, addQuestions);

module.exports = router;
