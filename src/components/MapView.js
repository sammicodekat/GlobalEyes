/* global window */
import React, { Component } from 'react'
import { connect } from 'react-redux'

import GMap from './GMap'
import Vouchers from './Vouchers'

class MapView extends Component {
  render() {
    // let { vouchers } = this.props.scenario
    const vouchers = 5
    return (
      <div>
        <GMap google={window.google} />
        <div>
          <Vouchers vouchers={vouchers} />
        </div>
      </div>
    )
  }
}

export default connect(state => ({
  scenario: state.scenarioReducer
}))(MapView)
