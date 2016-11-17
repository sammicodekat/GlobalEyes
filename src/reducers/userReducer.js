import * as types from '../actions/actionTypes'

export default function userReducer(state = {}, action) {
  switch (action.type) {
    case types.RECEIVE_USER:
      return action.userObj
    default:
      return state
  }
}