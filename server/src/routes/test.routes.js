const express = require('express');
const authMiddleware = require('../middleware/auth.middleware');
const { getUserDetails } = require('../controllers/userController');
const { createTest, getTests } = require('../controllers/testController');

const router = express.Router();

router.post('/createTest', authMiddleware, createTest);
router.get('/getTests', authMiddleware, getTests);

module.exports = router;
