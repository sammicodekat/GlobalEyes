/* global window */
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { browserHistory } from 'react-router'
import GMap from './GMap'
import Vouchers from './Vouchers'

class MapPage extends Component {
  render() {
    const { scenario } = this.props
    const { vouchers, waypoints } = scenario
    const { waypointName, _id } = waypoints[0]
    return (
      <div>
        <GMap google={window.google} />
        <div>
          <h5>Waypoints Buttons</h5>
          <button onClick={() => browserHistory.push(`/map/waypoints/${_id}`)}>{waypointName}</button>
        </div>

        <div>
          <Vouchers vouchers={vouchers} />
        </div>
      </div>
    )
  }
}

export default connect(state => ({ scenario: state.scenario }))(MapPage)
