import React from 'react'
import { browserHistory } from 'react-router'

const renderPlaceList = (scenarioId, waypoints) => (waypoints.map((waypoint, i) => (
  <button key={i} onClick={() => browserHistory.replace(`/${scenarioId}/location/${waypoint._id}`)}>{waypoint.waypointName}</button>
)))

const PlaceList = ({ scenarioId, waypoints }) => (
  <div>
    {renderPlaceList(scenarioId, waypoints || [])}
  </div>
)

export default PlaceList
