import React, { Component } from 'react';
import GMap from './GMap'

export default class MapView extends Component {
  render() {
    let remainingVouchers = 5
    return (
      <div>
        <GMap google={window.google} />
        <div>
          <div className="vouchers">
            {remainingVouchers}
          </div>
        </div>
      </div>
    )
  }
}
