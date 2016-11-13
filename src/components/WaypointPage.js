import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getScenario } from '../actions/scenarioActions'
// import { browserHistory } from 'react-router'
import Vouchers from './Vouchers'
import PoiList from './PoiList'

class WaypointPage extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    let id = this.props.params.id
    const scenario = this.props.scenarios[this.props.params.id-1]
    // const { scenario } = this.props
    const { vouchers, waypoints } = scenario
    let waypoint = waypoints.filter(x => {
     return x._id == id
    })
    const { waypointName, pointsOfInterest, falseRoute, coords, links, text } = waypoint[0];
    return (
      <div>
        <h1 className="waypointName">{waypointName}</h1>
        <div className="waypointImage"><img src={links[0]} alt={waypointName} /></div>
        <p>{text}</p>
        <PoiList pois={pointsOfInterest} />
      </div>
    )
  }
}

export default connect(state => ({ scenario: state.scenario, scenarios: state.scenarios }), dispatch => ({
  getScenario(id) {
    dispatch(getScenario(id))
  }
}))(WaypointPage)
