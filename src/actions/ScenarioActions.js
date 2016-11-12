import * as types from './actionTypes'
import {get, put, post} from 'axios'

export function receiveScenarios(scenarios) {
  return { type: types.RECEIVE_SCENARIOS_SUCCESS, scenarios}
}

export function receiveScenariosFailed(error) {
  return { type: types.RECEIVE_SCENARIOS_FAILED, error}
}

export function getScenarios() {
  return dispatch => {
    get('/api/scenarios')
      .then(res => res.data)
      .then(scenarios => {
        dispatch(receiveScenarios(scenarios))
      })
      .catch(error => {
        dispatch(receiveScenariosFailed(error))
      })
  }
}
