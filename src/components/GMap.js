/* global document */

import React, { Component } from 'react'

export default class GMap extends Component {
  componentDidMount() {
    this.initMap()
  }

  componentDidUpdate() {
    this.initMap()
  }

  initMap() {
    const mapRef = document.getElementById('mapRef')
    const { google } = this.props

    const zoom = 4
    const center = { lat: 41.85, lng: -97.65 }

    const map = new google.maps.Map(mapRef, {
      zoom,
      center
    })

    const markers = [{ current: true, visited: true, lat: 41.85, lng: -97.65 }, { current: false, visited: true, lat: 20, lng: -80 }, { current: false, visited: false, lat: 40, lng: -80 }]
    // var { markers } = this.props

    markers.forEach(markerPoint => {
      // let locationObj = markerPoint.geometry.location
      const { lat, lng } = markerPoint

      let icon = ''

      if (markerPoint.current) icon = './images/marker_current.png'
      else if (markerPoint.visited) icon = './images/marker_visited.png'
      else icon = './images/marker_new.png'

      const marker = new google.maps.Marker({
        position: { lat, lng },
        map,
        icon
      })

      const contentString = `<h5>${markerPoint.lat}, ${markerPoint.lng}</h5>`

      const infowindow = new google.maps.InfoWindow({
        content: contentString
      })

      let prevInfoWindow

      marker.addListener('click', () => {
        if (prevInfoWindow) prevInfoWindow.close()
        prevInfoWindow = infowindow
        console.log('prevInfoWindow: ', prevInfoWindow)
        infowindow.open(map, marker)
      })
    })
  }

  render() {
    return (
      <div id="mapRef" className="mapRef" />
    )
  }
}
