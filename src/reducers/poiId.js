import * as types from '../actions/actionTypes'

export default function poiId(state = '', action) {
  switch (action.type) {
    case types.POST_POI_SUCCESS:
      return action.poi
    default:
      return state
  }
}
