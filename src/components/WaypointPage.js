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
  // componentWillMount(){
  // this.props.dispatch(getWayPoint(this.props.params.id))
  // }
  render() {
    let { waypoint } = this.props
    const { waypointName, pointsOfInterest, falseRoute, coords, links, text } = waypoint
    return (
      <div>
        <div>{waypointName}</div>
        <img src={links} />
        <p>{text}</p>
        <PoiList pois={pointsOfInterest} />
      </div>
    )
  }
}

export default connect(state => ({ waypoint:state.waypoint }), dispatch => ({
  getWayPoint(id) {
    dispatch(getWayPoint(id))
  }
}))(WaypointPage)
