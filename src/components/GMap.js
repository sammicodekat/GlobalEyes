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

    let markers = [{current: true, visited: true, lat: 41.85, lng: -97.65}, {current: false, visited: true, lat: 20, lng: -80}, {current: false, visited: false, lat: 40, lng: -80}]
    // var { markers } = this.props

    markers.forEach(markerPoint => {
      // let locationObj = markerPoint.geometry.location
      let { lat, lng } = markerPoint

      let markerIcon = ''

      if (markerPoint.current) markerIcon = './images/marker_current.png'
      else if (markerPoint.visited) markerIcon = './images/marker_visited.png'
      else markerIcon = './images/marker_new.png'

      var marker = new google.maps.Marker({
        position: {lat, lng},
        map: map,
        icon: markerIcon
      })

      var contentString = `<h5>${markerPoint.lat}, ${markerPoint.lng}</h5>`

      var infowindow = new google.maps.InfoWindow({
        content: contentString
      })

      let prevInfoWindow

      marker.addListener('click', function () {
        if (prevInfoWindow) prevInfoWindow.close()
        prevInfoWindow = infowindow
        console.log('prevInfoWindow: ', prevInfoWindow)
        infowindow.open(map, marker)
      })
    })
  }

  render() {
    return (
      <div ref="mapRef" className="mapRef"></div>
    )
  }
}
