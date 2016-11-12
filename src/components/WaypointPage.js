import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getScenario } from '../actions/scenarioActions'
import { browserHistory } from 'react-router'

import Vouchers from './Vouchers'

class WaypointPage extends Component {
  constructor(props) {
    super(props)
  }

  componentWillMount() {
    this.props.getScenario(this.props.params.id)
  }

  render() {
    const { scenario } = this.props
    // const { vouchers, waypoints } = scenario
    // const { waypointName, pointsOfInterest, falseRoute } = waypoints[0];
    return (
      <div>
        <div>
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
}))(WaypointPage)
