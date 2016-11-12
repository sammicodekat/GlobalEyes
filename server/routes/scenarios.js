const express = require('express')

const router = express.Router()

const Scenario = require('../models/Scenario')

router.route('/')
.get((req, res) => {
  Scenario.find()
  .then((Scenarios) => { res.send(Scenarios) })
  .catch((err) => { res.status(400).send(err) })
})
.post((req, res) => {
  Scenario.create(req.body)
  .then((Scenario) => { res.send(Scenario) })
  .catch((err) => { res.status(400).send(err) })
})

router.route('/:id')
.get((req, res) => {
  Scenario.findById(req.params.id)
  .populate('waypoints')
  .then(Scenario => res.send(Scenario))
  .catch(err => res.status(400).send(err))
})
.put((req, res) => {
  Scenario.findByIdAndUpdate(req.params.id, { $set: req.body }, { new: true })
  .then(newScenario => res.send(newScenario))
  .catch(err => res.status(400).send(err))
})
.delete((req, res) => {
  Scenario.findByIdAndRemove(req.params.id)
  .then(() => {
    res.send('removed!');
  })
  .catch(err => res.status(400).send(err))
});

module.exports = router
