import React, {Component} from 'react';
import {connect} from 'react-redux'
import ScenariosList from './ScenariosList'
import { getScenario } from '../actions/scenarioActions'

class OneScenarioPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            scenario: {}
        }
    }
    componentWillMount() {
        this.props.getScenario(this.props.params.id)
    }
    componentWillReceiveProps({scenario}) {
        this.setState({scenario});
    }

    render() {
        let {scenario} = this.state
        return (
            <div>
              <div>
                <h1>ScenarioHI</h1>
                <p>{scenario.scenarioName}</p>
              </div>
            </div>
        )
    }
}

export default connect(state => ({scenario: state.scenario}), dispatch => ({
    getScenario(id) {
        dispatch(getScenario(id))
    }
}))(OneScenarioPage)
