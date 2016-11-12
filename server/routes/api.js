const express = require('express')
const router = express.Router()

router.use('/scenarios', require('./scenarios'))
router.use('/clues', require('./clues'))
router.use('/poi', require('./poi'))
router.use('/waypoints', require('./waypoints'))

module.exports = router
