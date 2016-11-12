import React, { Component } from 'react';
import { connect } from 'react-redux'
import ScenariosList from './ScenariosList'
import { getScenarios } from '../actions/scenariosActions'

class ScenariosPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            scenarios: []
        }
    }
    componentWillMount() {
        this.props.getScenarios()
    }
    componentWillReceiveProps({scenarios}) {
        this.setState({scenarios});
    }

    render() {
        let {scenarios} = this.state
        return (
            <div>
              <div>
                <h1>Scenarios</h1>
                <ScenariosList scenarios={scenarios}/>
                </div>
            </div>
        )
    }
}

export default connect(state => ({scenarios: state.scenariosReducer }), dispatch => ({
    getScenarios() {
        dispatch(getScenarios())
    }
}))(ScenariosPage)
