import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getScenario } from '../actions/scenarioActions'
// import { browserHistory } from 'react-router'
import Vouchers from './Vouchers'

class WaypointPage extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    let id = this.props.params.id
    const { scenario } = this.props
    const { vouchers, waypoints } = scenario
    let waypoint = waypoints.filter(x => {
     return x._id == id
    })
    const { waypointName, pointsOfInterest, falseRoute } = waypoint[0];
    return (
      <div>
        <div>{waypointName}</div>
        <div>{pointsOfInterest[0].poiName}</div>
      </div>
    )
  }
}

export default connect(state => ({ scenario: state.scenario }), dispatch => ({
  getScenario(id) {
    dispatch(getScenario(id))
  }
}))(WaypointPage)
