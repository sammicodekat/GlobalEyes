import React, { Component } from 'react';
import GMap from './GMap'

export default class MapView extends Component {
  render() {
    return (
      <div>
        <GMap google={window.google} />
        <div>
          <h1>Map</h1>
        </div>
      </div>
    )
  }
}
