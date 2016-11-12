const mongoose = require('mongoose')
const Schema = mongoose.Schema

const scenarioSchema = new Schema({
  scenarioName: { type: String, required: true },
  scenarioAuthor: { type: String, required: true },
  waypoints: [{ type: Schema.Types.ObjectId, ref: 'Waypoint' }],
  vouchers: { type: Number }
})

const Scenario = mongoose.model('Scenario', scenarioSchema)

module.exports = Scenario
