import * as types from '../actions/actionTypes'
import initialState from './initialState'

export default function poiReducer(state = initialState.waypoint, action) {
  switch (action.type) {
    case types.RECEIVE_WAYPOINT_SUCCESS:
      return action.waypoint
    default:
      return state
  }
}
