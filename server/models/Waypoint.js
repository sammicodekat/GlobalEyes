const mongoose = require('mongoose')
const Schema = mongoose.Schema

const waypointSchema = new Schema({
  waypointName: { type: String, required: true },
  pointsOfInterest: [{ type: Schema.Types.ObjectId, ref: 'PointOfInterest' }],
<<<<<<< HEAD
  falseRoute: {type: Array},
=======
  falseRoute: {type: Array}
>>>>>>> 79ad8599d30474f3a54fb6360569d0257181da42
})

const Waypoint = mongoose.model('Waypoint', waypointSchema)

module.exports = Waypoint
