/* global document */

import React, { Component } from 'react'

export default class StreetView extends Component {
  componentDidMount() {
    this.initStreetView()
  }

  componentDidUpdate() {
    this.initStreetView()
  }

  initStreetView() {
    const streetViewRef = document.getElementById('streetViewRef')
    const { google, coords } = this.props

    const panorama = new google.maps.StreetViewPanorama(
      streetViewRef, {
        position: coords,
        pov: {
          heading: 34,
          pitch: 10
        }
      }
    )
    // streetViewRef.setStreetView(panorama)
  }

  render() {
    return (<div id="streetViewRef" />)
  }
}
