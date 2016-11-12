const mongoose = require('mongoose')
const Schema = mongoose.Schema

const clueSchema = new Schema({
  waypoint: { type: String, required: true },
  poiName: { type: String, required: true },
  links: {type: Array},
  text: {type: String}
})

const Clue = mongoose.model('Clue', clueSchema)

module.exports = Clue