import React from 'react'
import { browserHistory } from 'react-router'

const renderPlaceList = markers => (markers.map((marker, i) => (
  <button key={i} onClick={() => browserHistory.push('location/:id')}>A Waypoint Place</button>
)))

const PlaceList = ({ markers }) => (
  <div>
    {renderPlaceList(markers || [])}
  </div>
)

export default PlaceList
