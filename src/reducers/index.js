import {combineReducers} from 'redux'
import scenarios from './scenarios'
import scenario from './scenario'

const rootReducer = combineReducers({
  scenarios,
  scenario
})

export default rootReducer
