import React, {Component} from 'react';
import {connect} from 'react-redux'
import {getScenarios} from '../actions/scenariosActions'
import {browserHistory} from 'react-router'
import ScenariosList from './ScenariosList'
class ScenariosPage extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        let {scenarios} = this.props
        return (
            <div>
              <div>
                <h1>Scenarios</h1>
                {ScenariosList}
                </div>
            </div>
        )
    }
}

export default connect(state => ({scenarios: state.scenarios}), dispatch => ({
    getScenarios() {
        dispatch(getScenarios())
    }
}))(ScenariosPage)
