const express = require('express')

const router = express.Router()

const Poi = require('../models/PointOfInterest')

router.route('/')
.get((req, res) => {
  Poi.find()
  .then((pois) => { res.send(pois) })
  .catch((err) => { res.status(400).send(err) })
})
.post((req, res) => {
  Poi.create(req.body)
  .then((poi) => { res.send(poi) })
  .catch((err) => { res.status(400).send(err) })
})

router.route('/:id')
.get((req, res) => {
  Poi.findById(req.params.id)
  .then(poi => res.send(poi))
  .catch(err => res.status(400).send(err))
})
.delete((req, res) => {
  Poi.findByIdAndRemove(req.params.id)
  .then(() => {
    res.send('removed!')
  })
  .catch(err => res.status(400).send(err))
})

module.exports = router
