/* global window */
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { browserHistory } from 'react-router'
import GMap from './GMap'
import Vouchers from './Vouchers'
import PlaceList from './PlaceList'

class MapPage extends Component {
  render() {
    // const { scenario } = this.props
    const scenario = this.props.scenarios[this.props.params.id-1]
    const { vouchers, waypoints } = scenario
    const markers = [{ current: true, visited: true, lat: 41.85, lng: -97.65 }, { current: false, visited: true, lat: 20, lng: -80 }, { current: false, visited: false, lat: 40, lng: -80 }]

    return (
      <div>
        <GMap google={window.google} markers={markers} />
        <div>
          <Vouchers vouchers={vouchers} />
          <PlaceList waypoints={waypoints} />
        </div>
      </div>
    )
  }
}

export default connect(state => ({ scenario: state.scenario, scenarios: state.scenarios }))(MapPage)
