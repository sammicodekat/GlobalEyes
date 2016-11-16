import { combineReducers } from 'redux'
import scenarios from './scenariosReducer'
import scenario from './scenarioReducer'
import auth from './auth'
import poi from './poiReducer'
import waypoint from './wayPointReducer'
import userObj from './userReducer'
import gameObj from './gameReducer'
import poiId from './poiId'
import wayPointId from './wayPointId'

const rootReducer = combineReducers({
  auth,
  scenarios,
  scenario,
  poi,
  waypoint,
  userObj,
  gameObj,
  poiId,
  wayPointId
})

export default rootReducer
