/* global document */
import {browserHistory} from 'react-router'
import React, {Component} from 'react'

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
            index,
            coordsList,
            visited,
            waypoints,
            nextplaces
        } = this.props
        const map = new google.maps.Map(mapRef, {
            zoom: 5,
            center: coordsList[coordsList.length - 1]
        })
        const lineSymbol = {
            path: 'M 0,-1 0,1',
            strokeOpacity: 1,
            scale: 4
        }
        const icon = '/images/marker_new.png'
        const iconVisited = './images/marker_visited.png'
        const iconNew = './images/marker_new.png'

        coordsList.forEach((route) => {
            const marker = new google.maps.Marker({position: route.coords, map, animation: google.maps.Animation.DROP, iconVisited})
        })
        nextplaces.forEach((route) => {
            const marker = new google.maps.Marker({position: route.coords, map, animation: google.maps.Animation.DROP, iconNew})
        })
        const marker = new google.maps.Marker({
            position: coordsList[coordsList.length - 1],
            map,
            animation: google.maps.Animation.DROP,
            icon
        })
        //   for (let i = 0; i < number; i++) {
        //     const marker = new google.maps.Marker({
        //       position: scenario.waypoints[i].coords,
        //       map,
        //       animation: google.maps.Animation.DROP,
        //       icon
        //     })
        //     let prevInfoWindow = false
        //     const contentString ='<p>'+ scenario.waypoints[i].waypointName+'</p>'
        //     const infowindow = new google.maps.InfoWindow({
        //       content: contentString
        //  })
        //       marker.addListener('click', () => {
        //        browserHistory.replace(`/${scenario._id}/location/${waypoint._id}`)
        //       })
        //       marker.addListener('mouseover', () => {
        //           if (prevInfoWindow) {
        //           prevInfoWindow.close()
        //           }
        //           infowindow.open(map, marker)
        //           prevInfoWindow = infowindow;
        //         })
        //   }
        const routes = coordsList.length
        let i = 0
        while (i + 1 <= routes) {
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
            i++
        }
    }

    render() {
        console.log('this.props.user', this.props.user)
        return (<div id="mapRef" className="mapRef"/>)
    }
}
