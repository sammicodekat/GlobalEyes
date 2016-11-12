import {combineReducers} from 'redux'
import scenarios from './scenariosReducer'
import scenario from './scenarioReducer'

const rootReducer = combineReducers({
  scenarios,
  scenario
})

export default rootReducer
