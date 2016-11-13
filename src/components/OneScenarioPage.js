import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getScenario } from '../actions/scenarioActions'
import { browserHistory } from 'react-router'

import Vouchers from './Vouchers'

class OneScenarioPage extends Component {
  constructor(props) {
    super(props)
  }

  componentWillMount() {
    this.props.getScenario(this.props.params.id)
  }

  render() {
    const { scenario } = this.props
    const { vouchers } = scenario
    const scenarioId = this.props.params.id

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
            <button onClick={() => browserHistory.push(`${scenarioId}/map`)}>Start Game</button>
          </div>
          <Vouchers vouchers={vouchers} />
        </div>
      </div>
    )
  }
}

export default connect(state => ({ scenario: state.scenario }), dispatch => ({
  getScenario(id) {
    dispatch(getScenario(id))
  }
}))(OneScenarioPage)
