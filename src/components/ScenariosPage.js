import React, { Component } from 'react';
import { connect } from 'react-redux'
import { getScenarios } from '../actions/scenarioActions'
import { browserHistory } from 'react-router'
import ScenariosList from './ScenariosList'

class ScenariosPage extends Component {
    constructor(props) {
        super(props);
      this.state = {
        scenarios: [],
      }
    }
    componentWillReceiveProps({ scenarios }) {
      this.setState({ scenarios });
    }

    // componentWillUpdate(nextProps, nextState) {
    //   console.log('componentWillUpdate: ', nextState);
    // }

    render() {
        let { scenarios } = this.state
        return (
            <div>
              <div>
                <h1>Scenarios</h1>
                <ScenariosList scenarios={scenarios} />
              </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
  return {
   scenarios: state.scenarios
  }
}

export default connect(mapStateToProps, null)(ScenariosPage)
