import * as types from '../actions/actionTypes'

export default function poiReducer(state = '', action) {
  switch (action.type) {
    case types.POST_WAYPOINT_SUCCESS:
      return action.waypoint._id
    default:
      return state
  }
}
