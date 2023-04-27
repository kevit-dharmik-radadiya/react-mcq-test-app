const express = require('express');
const authMiddleware = require('../middleware/auth.middleware');
const { getUserDetails } = require('../controllers/userController');

const router = express.Router();

router.get('/getUserDetails/:id', authMiddleware, getUserDetails);

module.exports = router;
