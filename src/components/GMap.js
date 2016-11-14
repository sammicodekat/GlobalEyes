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
    const { scenario } = this.props

    const map = new google.maps.Map(mapRef, {
      zoom: 5,
      center: scenario.waypoints[0].coords
    })

    scenario.waypoints.forEach(waypoint => {
      const { lat, lng } = waypoint.coords

      const icon = '/images/marker_new.png'

      // if (i === 1) icon = './images/marker_current.png'
      // else if (i === 0) icon = './images/marker_visited.png'
      // else icon = './images/marker_new.png'

      const marker = new google.maps.Marker({
        position: { lat, lng },
        map,
        icon
      })

      const contentString = `<h4>${waypoint.waypointName}</h4>`

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
