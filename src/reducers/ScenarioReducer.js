import * as types from '../actions/actionTypes'
import initialState from './initialState'

export default function scenarioReducer(state = initialState.scenario, action) {
  switch (action.type) {
    case types.RECEIVE_ONESCENARIO_SUCCESS:
      return action.scenario
    default:
      return state
  }
}
