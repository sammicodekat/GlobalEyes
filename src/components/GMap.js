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
    const { user } = this.props
    const number = user.visitedWaypoints.length
    const map = new google.maps.Map(mapRef, {
      zoom: 5,
      //center is user's current waypoint location
      center: scenario.waypoints[0].coords
    })
    const lineSymbol = {
          path: 'M 0,-1 0,1',
          strokeOpacity: 1,
          scale: 4
        }
    const icon = '/images/marker_new.png'
    // if (i === 1) icon = './images/marker_current.png'
    // else if (i === 0) icon = './images/marker_visited.png'
    // else icon = './images/marker_new.png'
    scenario.waypoints[0].falseRoute.forEach((route) => {
      const marker = new google.maps.Marker({
        position: route.coords,
        map,
        animation: google.maps.Animation.DROP,
        icon
      })})

    for (let i = 0; i < number; i++) {
      const marker = new google.maps.Marker({
        position: scenario.waypoints[i].coords,
        map,
        animation: google.maps.Animation.DROP,
        icon
      })
      let prevInfoWindow = false;
      const contentString ='<p>'+ scenario.waypoints[i].waypointName+'</p>'
      const infowindow = new google.maps.InfoWindow({
        content: contentString
   })
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
    }


      const coords1 = scenario.waypoints[0].falseRoute[0].coords
      const coords2 = scenario.waypoints[0].falseRoute[1].coords

      const line = new google.maps.Polyline({
        path: [scenario.waypoints[0].coords, coords1],
        strokeOpacity: 0,
          icons: [{
            icon: lineSymbol,
            offset: '0',
            repeat: '20px'
          }],
        map
      })
      const line2 = new google.maps.Polyline({
        path: [coords1, coords2],
        strokeOpacity: 0,
          icons: [{
            icon: lineSymbol,
            offset: '0',
            repeat: '20px'
          }],
        map
      })
    }

  render() {
   console.log( 'this.props.user' , this.props.user )
    return (
      <div id="mapRef" className="mapRef" />
    )
  }
}
