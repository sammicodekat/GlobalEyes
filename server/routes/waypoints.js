const express = require('express')

const router = express.Router()

const Waypoint = require('../models/Waypoint')

router.route('/')
.get((req, res) => {
  Waypoint.find()
  .then((waypointss) => { res.send(waypointss) })
  .catch((err) => { res.status(400).send(err) })
})
.post((req, res) => {
  Waypoint.create(req.body)
  .then((waypoints) => { res.send(waypoints) })
  .catch((err) => { res.status(400).send(err) })
})

router.route('/:id')
.get((req, res) => {
  Waypoint.findById(req.params.id)
  .then(waypoint => res.send(waypoint))
  .catch(err => res.status(400).send(err))
})
.put((req, res) => {
  Waypoints.findByIdAndUpdate(req.params.id, { $set: req.body }, { new: true })
  .then(newWaypoint => res.send(newWaypoint))
  .catch(err => res.status(400).send(err))
})
.delete((req, res) => {
  Waypoint.findByIdAndRemove(req.params.id)
  .then(() => {
    res.send('removed!');
  })
  .catch(err => res.status(400).send(err))
});

module.exports = router
