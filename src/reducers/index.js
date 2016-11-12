import {combineReducers} from 'redux'
import scenariosReducer from './scenariosReducer'
import scenarioReducer from './scenarioReducer'

const rootReducer = combineReducers({
  scenariosReducer,
  scenarioReducer
})

export default rootReducer
