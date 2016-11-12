const express = require('express');
const router = express.Router();

router.use('./scenarios',require('./scenarios'))
router.use('./clues',require('./clues'))

module.exports = router;
