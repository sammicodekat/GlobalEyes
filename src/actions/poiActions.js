import { get, put, post } from 'axios'
import * as types from './actionTypes'

export function receivePoi(poi) {
  return { type: types.RECEIVE_POI_SUCCESS, poi }
}

export function receivePoiFailed(error) {
  return { type: types.RECEIVE_POI_FAILED, error }
}

export function postPoi(poi) {
  return { type: types.POST_POI_SUCCESS, poi }
}

export function postPoiFailed(error) {
  return { type: types.POST_POI_FAILED, error }
}

export function getPoi(id) {
  return dispatch => {
    get(`/api/poi/${id}`).then(res => res.data).then((poi) => {
      console.log('getPoiAction',poi)
      dispatch(receivePoi(poi))
    }).catch(error => {
      dispatch(receivePoiFailed(error))
    })
  }
}

export function createNewPoi(poi) {
  return dispatch => {
    if (poi) {
      post('/api/poi', poi).then(res => res.data).then((Poi) => {
        dispatch(postPoi(Poi))
      }).catch(error => {
        dispatch(postPoiFailed(error))
      })
    }
  }
}
