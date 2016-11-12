import React, { Component } from 'react';

export default class GMap extends Component {
  componentDidMount () {
    this.initMap()
  }

  componentDidUpdate (prevProps, prevState) {
    this.initMap()
  }

  initMap () {
    const { mapRef } = this.refs
    const { google } = this.props

    let zoom = 4
    let center = {lat: 41.85, lng: -97.65}

    var map = new google.maps.Map(mapRef, {
      zoom,
      center
    })
  }

  render() {
    return (
      <div ref="mapRef" className="mapRef"></div>
    )
  }
}
