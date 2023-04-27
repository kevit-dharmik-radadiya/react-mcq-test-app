const express = require('express');
const authMiddleware = require('../middleware/auth.middleware');
const { getScores } = require('../controllers/scoreController');

const router = express.Router();

router.get('/getScores', authMiddleware, getScores);

module.exports = router;
