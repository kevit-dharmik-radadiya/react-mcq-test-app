const express = require('express');
const { successResponse } = require('../utils/responses');

const router = express.Router();

router.get('/', function (req, res) {
  successResponse(res, {
    message: 'Hello From Quizza 🤝',
  });
});

module.exports = router;
