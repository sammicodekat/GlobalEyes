const express = require('express')

const router = express.Router()

const Clue = require('../models/Clue')

router.route('/')
.get((req, res) => {
  Clue.find()
  .then((clues) => { res.send(clues) })
  .catch((err) => { res.status(400).send(err) })
})
.post((req, res) => {
  Clue.create(req.body)
  .then((clue) => { res.send(clue) })
  .catch((err) => { res.status(400).send(err) })
})

router.route('/:id')
.get((req, res) => {
  Clue.findById(req.params.id)
  .then(clue => res.send(clue))
  .catch(err => res.status(400).send(err))
})
.delete((req, res) => {
  Clue.findByIdAndRemove(req.params.id)
  .then(() => {
    res.send('removed!')
  })
  .catch(err => res.status(400).send(err))
})

module.exports = router
