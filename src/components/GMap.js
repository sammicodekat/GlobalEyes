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
    const lineSymbol = {
          path: 'M 0,-1 0,1',
          strokeOpacity: 1,
          scale: 4
        };
    const icon = '/images/marker_new.png'
    // if (i === 1) icon = './images/marker_current.png'
    // else if (i === 0) icon = './images/marker_visited.png'
    // else icon = './images/marker_new.png'
    scenario.waypoints[0].falseRoute.forEach((route) => {
      const { lat, lng } = route
      const marker = new google.maps.Marker({
        position: { lat, lng },
        map,
        animation: google.maps.Animation.DROP,
        icon
      })})
    scenario.waypoints.forEach((waypoint)=> {
      const { lat, lng } = waypoint.coords
      const marker = new google.maps.Marker({
        position: { lat, lng },
        map,
        animation: google.maps.Animation.DROP,
        icon
      })
      const rlat = scenario.waypoints[0].falseRoute[0].lat
      const rlng = scenario.waypoints[0].falseRoute[0].lng
      const rrlat = scenario.waypoints[0].falseRoute[1].lat
      const rrlng = scenario.waypoints[0].falseRoute[1].lng

      const line = new google.maps.Polyline({
        path: [scenario.waypoints[0].coords, {lat:rlat, lng:rlng }],
        strokeOpacity: 0,
          icons: [{
            icon: lineSymbol,
            offset: '0',
            repeat: '20px'
          }],
        map
      })
      const line2 = new google.maps.Polyline({
        path: [{lat:rlat, lng:rlng },{lat:rrlat, lng:rrlng }],
        strokeOpacity: 0,
          icons: [{
            icon: lineSymbol,
            offset: '0',
            repeat: '20px'
          }],
        map
      })
      const contentString ='<button>'+waypoint.waypointName+'</button>'
      const infowindow = new google.maps.InfoWindow({
        content: contentString
      })

      let prevInfoWindow = false;

      marker.addListener('click', () => {
       browserHistory.replace(`/${scenario._id}/location/${waypoint._id}`)
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
