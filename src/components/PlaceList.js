import React from 'react'
import { browserHistory } from 'react-router'

const renderPlaceList = waypoints => (waypoints.map((waypoint, i) => (
  <button key={i} onClick={() => browserHistory.push(`location/${waypoint._id}`)}>{waypoint.waypointName}</button>
)))

const PlaceList = ({ waypoints }) => (
  <div>
    {renderPlaceList(waypoints || [])}
  </div>
)

export default PlaceList
