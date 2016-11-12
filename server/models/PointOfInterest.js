const mongoose = require('mongoose')
const Schema = mongoose.Schema

const pointOfInterestSchema = new Schema({
  poiName: { type: String, required: true },
  clues: [{ type: Schema.Types.ObjectId, ref: 'Clue' }],
  waypoints: [{ type: Schema.Types.ObjectId, ref: 'Waypoint' }],
  links: {type: Array},
  text: {type: String}
})

const PointOfInterest = mongoose.model('PointOfInterest', pointOfInterestSchema)

module.exports = PointOfInterest