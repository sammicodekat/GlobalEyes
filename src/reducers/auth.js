import * as types from '../actions/actionTypes'

//creating a template for our data
const initialState = {
  authenticated: false,
  user: {}
}

export default function(state = initialState, {type, payload}) {
  switch(type) {
    case types.SIGN_IN_SUCCESS:
      return Object.assign({}, state, {
        authenticated: true,
        user: payload
      })
    case types.SIGN_OUT_SUCCESS:
      return initialState
    default: 
      return state
  }
}