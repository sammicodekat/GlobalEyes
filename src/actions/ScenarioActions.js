import * as types from './actionTypes'
import {get, put, post} from 'axios'

export function receiveOneScenario(scenario) {
    return {type: types.RECEIVE_ONESCENARIO_SUCCESS, scenario}
}

export function receiveOneScenarioFailed(error) {
    return {type: types.RECEIVE_ONESCENARIO_FAILED, error}
}

export function getScenario(id) {
    return dispatch => {
        get(`/api/scenarios/${id}`).then(res => res.data).then(scenario => {
            dispatch(receiveOneScenario(scenario))
        }).catch(error => {
            dispatch(receiveOneScenarioFailed(error))
        })
    }
}
