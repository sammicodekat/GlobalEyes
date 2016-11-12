import * as types from '../actions/actionTypes'
import initialState from './initialState'

export default function scenariosReducer(state = initialState.scenario, action) {
  switch(action.type) {
    case types.POST_SCENARIOS_SUCCESS:
      return action.scenario
      default:
        return state
  }
}
