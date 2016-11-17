import * as types from '../actions/actionTypes'

export default function poiReducer(state = {}, action) {
  switch (action.type) {
    case types.RECEIVE_POI_SUCCESS:
    console.log('action',action)
      return action.poi
    default:
      return state
  }
}
