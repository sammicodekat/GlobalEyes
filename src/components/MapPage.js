/* global window */
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { browserHistory } from 'react-router'
import GMap from './GMap'
import Vouchers from './Vouchers'
import PlaceList from './PlaceList'

class MapPage extends Component {
  render() {
    const { scenario } = this.props
    const { vouchers, waypoints } = scenario
    // const { waypointName, _id } = waypoints[0]

    const markers = [{ current: true, visited: true, lat: 41.85, lng: -97.65 }, { current: false, visited: true, lat: 20, lng: -80 }, { current: false, visited: false, lat: 40, lng: -80 }]

    return (
      <div>
        <GMap google={window.google} markers={markers} />
        <div>
          <h5>Waypoints Buttons</h5>
          {/* <button onClick={() => browserHistory.push(`${scenario._id}/location/${_id}`)}>{waypointName}</button> */}
          <button onClick={() => browserHistory.push(`${scenario._id}/location/${_id}`)}>waypointName</button>
        </div>

        <div>
          <Vouchers vouchers={vouchers} />
          <PlaceList markers={markers} />
        </div>
      </div>
    )
  }
}

export default connect(state => ({ scenario: state.scenario }))(MapPage)
