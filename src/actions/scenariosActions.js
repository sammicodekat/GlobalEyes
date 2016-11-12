import * as types from './actionTypes'
import {get, put, post} from 'axios'

export function receiveScenarios(scenarios) {
    return {type: types.RECEIVE_SCENARIOS_SUCCESS, scenarios}
}

export function receiveScenariosFailed(error) {
    return {type: types.RECEIVE_SCENARIOS_FAILED, error}
}

export function postScenario(scenario) {
    return {type: types.POST_SCENARIOS_SUCCESS, scenario}
}

export function postScenarioFailed(error) {
    return {type: types.POST_SCENARIOS_FAILED, error}
}

export function getScenarios() {
    return dispatch => {
        get('/api/scenarios').then(res => res.data).then(scenarios => {
            dispatch(receiveScenarios(scenarios))
        }).catch(error => {
            dispatch(receiveScenariosFailed(error))
        })
    }
}

export function createNewScenario(scenario) {
    return dispatch => {
        if (scenario) {
            post('/api/scenarios',scenario).then(res => res.data).then(scenario => {
                dispatch(postScenario(scenario))
            }).catch(error => {
                dispatch(postScenarioFailed(error))
            })
        }
    }
}
