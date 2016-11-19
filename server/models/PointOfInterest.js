const mongoose = require('mongoose')
const Schema = mongoose.Schema

const pointOfInterestSchema = new Schema({
  poiName: { type: String, required: true },
  clues: {
    links: { type: String },
    text: { type: String }
  },
  links: { type: String },
  text: { type: String },
  coords: { lat: { type: String }, lng: { type: String } }
})

const PointOfInterest = mongoose.model('PointOfInterest', pointOfInterestSchema)

module.exports = PointOfInterest
