/* global window */

import React, { Component } from 'react'
import { connect } from 'react-redux'
// import { browserHistory } from 'react-router'
import GMap from './GMap'
import Vouchers from './Vouchers'
import PlaceList from './PlaceList'

//USER - bring in the currentWaypoint & vouchers

class MapPage extends Component {
  render() {
    const scenario = this.props.scenarios[this.props.params.id - 1]
    const { vouchers, waypoints } = scenario

    return (
      <div>
        <GMap google={window.google} scenario={scenario} />
        <div>
          <Vouchers vouchers={vouchers} />
          <PlaceList waypoints={waypoints} />
        </div>
      </div>
    )
  }
}

export default connect(state => ({ scenario: state.scenario, scenarios: state.scenarios }))(MapPage)
