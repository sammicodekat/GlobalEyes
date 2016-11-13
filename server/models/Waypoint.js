const mongoose = require('mongoose')
const Schema = mongoose.Schema

const waypointSchema = new Schema({
  waypointName: { type: String, required: true },
  pointsOfInterest: [{ type: Schema.Types.ObjectId, ref: 'PointOfInterest' }],
  links: { type: Array },
  text: { type: String },
  falseRoute: { type: Array}
})

const Waypoint = mongoose.model('Waypoint', waypointSchema)

module.exports = Waypoint
