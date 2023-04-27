const express = require('express');
const authMiddleware = require('../middleware/auth.middleware');
const {
  createTest,
  getTests,
  submitTest,
} = require('../controllers/testController');

const router = express.Router();

router.post('/createTest', authMiddleware, createTest);
router.get('/getTests', authMiddleware, getTests);
router.post('/submitTest', authMiddleware, submitTest);

module.exports = router;
