import React, { Component } from 'react';
import { connect } from 'react-redux'
import ScenariosList from './ScenariosList'
import { getScenarios } from '../actions/scenariosActions'

class ScenariosPage extends Component {
    constructor(props) {
        super(props);
    }
    componentWillMount() {
        this.props.getScenarios()
    }

    render() {
        let {scenarios} = this.props;
        return (
            <div>
              <div>
                <h1>Scenarios</h1>
                <ScenariosList scenarios={scenarios}/>
                <button>+</button>
              </div>
            </div>
        )
    }
}

export default connect(state => ({scenarios: state.scenarios }), dispatch => ({
    getScenarios() {
        dispatch(getScenarios())
    }
}))(ScenariosPage)
