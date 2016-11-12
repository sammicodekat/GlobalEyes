import { combineReducers } from 'redux'
import scenarios from './scenariosReducer'
import scenario from './scenarioReducer'
import auth from './auth'

const rootReducer = combineReducers({
  auth,
  scenarios,
  scenario
})

export default rootReducer
