import * as types from '../actions/actionTypes'
// import initialState from './initialState'

export default function scenariosReducer(state = [], action) {
  switch (action.type) {
    case types.RECEIVE_SCENARIOS_SUCCESS:
      return action.scenarios
    case types.POST_SCENARIOS_SUCCESS:
      return [...state, action.scenario]
    default:
      return state
  }
}
