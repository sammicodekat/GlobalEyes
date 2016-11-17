import * as types from '../actions/actionTypes'

export default function poiReducer(state = {}, action) {
  switch (action.type) {
   console.log('action.poi',action.poi)
    case types.RECEIVE_POI_SUCCESS:
      return action.poi
    default:
      return state
  }
}
