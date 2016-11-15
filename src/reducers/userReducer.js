import * as types from '../actions/actionTypes'


export default function userReducer(state = '', {type, payload}) {
  console.log('I am action.userId!!!!!: ', payload)
  console.log('I am the type: ', type)
  switch (type) {
    case types.WILL_USER_CONTINUE_GAME:
      return payload
    default:
      return state
  }
}

