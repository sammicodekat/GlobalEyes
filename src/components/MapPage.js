/* global window */
import React, { Component } from 'react'
import { connect } from 'react-redux'

import GMap from './GMap'
import Vouchers from './Vouchers'
import PlaceList from './PlaceList'

class MapPage extends Component {
  render() {
    const markers = [{ current: true, visited: true, lat: 41.85, lng: -97.65 }, { current: false, visited: true, lat: 20, lng: -80 }, { current: false, visited: false, lat: 40, lng: -80 }]
    // let { vouchers } = this.props.scenario
    const vouchers = 5
    return (
      <div>
        <GMap google={window.google} markers={markers} />
        <div>
          <Vouchers vouchers={vouchers} />
          <PlaceList markers={markers} />
        </div>
      </div>
    )
  }
}

export default connect(state => ({
  scenario: state.scenarioReducer
}))(MapPage)
