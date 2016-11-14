const express = require('express')
const router = express.Router()

router.use('/scenarios', require('./scenarios'))
router.use('/poi', require('./poi'))
router.use('/waypoints', require('./waypoints'))

module.exports = router
