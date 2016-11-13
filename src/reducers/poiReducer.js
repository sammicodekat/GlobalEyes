import * as types from '../actions/actionTypes'
import initialState from './initialState'

export default function poiReducer(state = initialState.pointOfInterest, action) {
  switch (action.type) {
    case types.RECEIVE_POI_SUCCESS:
      return action.poi
    default:
      return state
  }
}
