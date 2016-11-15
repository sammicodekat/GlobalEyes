import { combineReducers } from 'redux'
import scenarios from './scenariosReducer'
import scenario from './scenarioReducer'
import auth from './auth'
import poi from './poiReducer'
import waypoint from './wayPointReducer'
import userReducer from './userReducer'

const rootReducer = combineReducers({
  auth,
  scenarios,
  scenario,
  poi,
  waypoint,
  userReducer
})

export default rootReducer
