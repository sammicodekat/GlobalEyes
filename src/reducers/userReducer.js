import * as types from '../actions/actionTypes'


export default function userReducer(state = '', action) {
  switch (action.type) {
    case types.WILL_USER_CONTINUE_GAME:
      return action.userObject
    default:
      return state
  }
}

