import React, {Component} from 'react';
import {connect} from 'react-redux'
import ScenariosList from './ScenariosList'
import { getScenario } from '../actions/scenarioActions'

import Vouchers from './Vouchers'

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
        let { scenario } = this.state
        let { vouchers } = scenario

        return (
            <div>
              <div>
                <h1>{scenario.scenarioName || ''}</h1>
                <h4>created by: {scenario.scenarioAuthor || ''}</h4>
                <div className="greeting">
                  <p>Greetings Traveller,</p>
                  <p>You are about to embark on an amazing adventure.</p>
                  <p>Your journey begins in X.</p>
                  <p>Good Luck!</p>
                </div>
                <Vouchers vouchers={vouchers}/>
              </div>
            </div>
        )
    }
}

export default connect(state => ({scenario: state.scenarioReducer}), dispatch => ({
    getScenario(id) {
        dispatch(getScenario(id))
    }
}))(OneScenarioPage)
