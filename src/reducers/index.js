import { combineReducers } from 'redux'
import scenarios from './scenariosReducer'
import scenario from './scenarioReducer'
import auth from './auth'
import poi from './poiReducer'
import waypoint from './wayPointReducer'

const rootReducer = combineReducers({
  auth,
  scenarios,
  scenario,
  poi,
  waypoint
})

export default rootReducer
