const express = require('express')

const router = express.Router()

const Waypoints = require('../models/Waypoints')

router.route('/')
.get((req, res) => {
  Waypoints.find()
  .then((waypointss) => { res.send(waypointss) })
  .catch((err) => { res.status(400).send(err) })
})
.post((req, res) => {
  Waypoints.create(req.body)
  .then((waypoints) => { res.send(waypoints) })
  .catch((err) => { res.status(400).send(err) })
})

router.route('/:id')
.get((req, res) => {
  Waypoints.findById(req.params.id)
  .then(waypoints => res.send(waypoints))
  .catch(err => res.status(400).send(err))
})
.put((req, res) => {
  Waypoints.findByIdAndUpdate(req.params.id, { $set: req.body }, { new: true })
  .then(newWaypoints => res.send(newWaypoints))
  .catch(err => res.status(400).send(err))
})
.delete((req, res) => {
  Waypoints.findByIdAndRemove(req.params.id)
  .then(() => {
    res.send('removed!');
  })
  .catch(err => res.status(400).send(err))
});

module.exports = router
