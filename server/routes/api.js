const express = require('express');
const router = express.Router();

router.use('./scenarios',require('./scenarios'))
router.use('./clues',require('./clues'))
router.use('./pois',require('./pois'))
router.use('./waypoints',require('./waypoints'))

module.exports = router;
