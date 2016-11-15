/* global document */
import { browserHistory } from 'react-router'

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

    scenario.waypoints.forEach((waypoint)=> {
      const { lat, lng } = waypoint.coords

      let icon = '/images/marker_new.png'
      // if (i === 1) icon = './images/marker_current.png'
      // else if (i === 0) icon = './images/marker_visited.png'
      // else icon = './images/marker_new.png'

      const marker = new google.maps.Marker({
        position: { lat, lng },
        map,
        animation: google.maps.Animation.DROP,
        icon
      })
      const goToPlace = () => (browserHistory.push(`location/${waypoint._id}`))

      const contentString ='<button>'+waypoint.waypointName+'</button>'
      const infowindow = new google.maps.InfoWindow({
        content: contentString
      })

      let prevInfoWindow = false;

      marker.addListener('click', () => {
      browserHistory.push(`location/${waypoint._id}`)
      })
      marker.addListener('mouseover', () => {
          if (prevInfoWindow) {
          prevInfoWindow.close()
          }
          infowindow.open(map, marker)
          prevInfoWindow = infowindow;
        })
    })
  }

  render() {
    return (
      <div id="mapRef" className="mapRef" />
    )
  }
}
