const mongoose = require('mongoose')
const Schema = mongoose.Schema

const pointOfInterestSchema = new Schema({
  poiName: { type: String, required: true },
  clues: {
    links: { type: Array },
    text: { type: String }
  },
  links: { type: Array },
  text: { type: String }
})


const PointOfInterest = mongoose.model('PointOfInterest', pointOfInterestSchema)

module.exports = PointOfInterest
