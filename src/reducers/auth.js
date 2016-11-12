import * as types from '../actions/actionTypes'
import initialState from './initialState'

// creating a template for our data

export default function (state = initialState, { type, payload }) {
  switch (type) {
    case types.SIGN_IN_SUCCESS:
      const { uid, displayName, email, photoURL } = payload
      return Object.assign({}, state, {
        authenticated: true,
        user: { uid, displayName, email, photoURL }
      })
    case types.SIGN_OUT_SUCCESS:
      return initialState
    default:
      return state
  }
}
