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

    const {
      google,
      scenario,
      coordsList,
      visited,
      nextplaces,
      updateUsersWaypoint
    } = this.props

    const styles = [
      {
        featureType: '',
        elementType: '',
        stylers: []
      }
    ]

    const map = new google.maps.Map(mapRef, {
      zoom: 5,
      center: coordsList[coordsList.length - 1]
    })

    const lineSymbol = {
      path: 'M 0,-1 0,1',
      strokeOpacity: 1,
      scale: 4
    }

    const icon = '/images/user.png'
    const iconVisited = '/images/marker_visited.png'
    const iconNew = '/images/marker_new.png'

    visited.forEach((route) => {
      const marker = new google.maps.Marker({ position: route.coords, map, animation: google.maps.Animation.DROP, icon: iconVisited })
      marker.addListener('click', () => {
        browserHistory.replace(`/${scenario._id}/location/${route._id}`)
        updateUsersWaypoint(route._id, route.coords)
      })

      const contentString = `<span className="mapTip">${route.waypointName}</span>`
      const infowindow = new google.maps.InfoWindow({
        content: contentString
      })

      marker.addListener('click', () => {
        browserHistory.replace(`/${scenario._id}/location/${route._id}`)
      })

      marker.addListener('mouseover', () => {
        infowindow.open(map, marker)
      })

      marker.addListener('mouseout', () => {
        infowindow.close()
      })
    })

    if (nextplaces.length !== 0) {
      nextplaces.forEach((route) => {
        const marker = new google.maps.Marker({ position: route.coords, map, animation: google.maps.Animation.DROP, icon: iconNew })
        marker.addListener('click', () => {
          browserHistory.replace(`/${scenario._id}/location/${route._id}`)
          updateUsersWaypoint(route._id, route.coords)
        })

        const contentString = `<span className="mapTip">${route.waypointName}</span>`
        const infowindow = new google.maps.InfoWindow({
          content: contentString
        })

        marker.addListener('click', () => {
          browserHistory.replace(`/${scenario._id}/location/${route._id}`)
        })

        marker.addListener('mouseover', () => {
          infowindow.open(map, marker)
        })

        marker.addListener('mouseout', () => {
          infowindow.close()
        })
      })
    }
    if(coordsList.length>1){
    const marker = new google.maps.Marker({
      position: coordsList[coordsList.length - 1],
      map,
      animation: google.maps.Animation.DROP,
      icon

    })
    }
    const routes = coordsList.length
    let i = 0
    while (i + 1 < routes) {
      const line = new google.maps.Polyline({
        path: [
          coordsList[i],
          coordsList[i + 1]
        ],
        strokeOpacity: 0,
        icons: [
          {
            icon: lineSymbol,
            offset: '0',
            repeat: '20px'
          }
        ],
        map
      })
      i += 1
    }
  }

  render() {
    return (<div id="mapRef" className="mapRef" />)
  }
}
