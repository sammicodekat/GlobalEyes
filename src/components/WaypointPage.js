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
      <div className="waypoint">
        <h1 className="waypointName">{waypointName}</h1>
        <div className="waypointImage"><img src={links[0]} alt={waypointName} /></div>
        <article>
          <p>{text}</p>
        </article>
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
