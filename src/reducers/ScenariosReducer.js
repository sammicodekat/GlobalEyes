import * as types from '../actions/actionTypes'
import initialState from './initialState'

export default function scenariosReducer(state = initialState.scenarios, action) {
  switch(action.type) {
    case types.RECEIVE_SCENARIOS_SUCCESS:
      return [...state,
        Object.assign({}, action.scenarios)
      ]
      default:
        return state
  }
}
