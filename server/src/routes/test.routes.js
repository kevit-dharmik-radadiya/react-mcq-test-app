const express = require('express');
const authMiddleware = require('../middleware/auth.middleware');
const { getUserDetails } = require('../controllers/userController');
const { createTest } = require('../controllers/testController');

const router = express.Router();

router.post('/createTest', authMiddleware, createTest);

module.exports = router;
