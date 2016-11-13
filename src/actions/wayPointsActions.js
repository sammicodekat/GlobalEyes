import { get, put, post } from 'axios'
import * as types from './actionTypes'

export function receiveWayPoint(waypoint) {
  return { type: types.RECEIVE_WAYPOINT_SUCCESS, waypoints }
}

export function receiveWayPointFailed(error) {
  return { type: types.RECEIVE_WAYPOINT_FAILED, error }
}

export function postWayPoint(waypoint) {
  return { type: types.POST_WAYPOINT_SUCCESS, waypoint }
}

export function postWayPointFailed(error) {
  return { type: types.POST_WAYPOINT_FAILED, error }
}

export function getWayPoint(id) {
  return dispatch => {
    get(`/api/waypoints/${id}`).then(res => res.data).then((waypoint) => {
      dispatch(receiveWayPoint(waypoint))
    }).catch(error => {
      dispatch(receiveWayPointFailed(error))
    })
  }
}

export function createNewWayPoint(waypoint) {
  return dispatch => {
    if (waypoint) {
      post('/api/waypoints', waypoint).then(res => res.data).then((Waypoint) => {
        dispatch(postWayPoint(Waypoint))
      }).catch(error => {
        dispatch(postWayPointFailed(error))
      })
    }
  }
}
