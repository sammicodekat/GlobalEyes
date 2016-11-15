import * as types from '../actions/actionTypes'


export default function userReducer(state = '', action) {
  switch (action.type) {
    case types.WILL_USER_CONTINUE_GAME:
    console.log('I am the action: ', action.userId)
      return action.userId
    default:
      return state
  }
}

