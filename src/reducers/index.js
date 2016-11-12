import { combineReducers } from 'redux'
import scenariosReducer from './scenariosReducer'
import scenarioReducer from './scenarioReducer'
import auth from './auth'

const rootReducer = combineReducers({
  auth,
  scenariosReducer,
  scenarioReducer
})

export default rootReducer

