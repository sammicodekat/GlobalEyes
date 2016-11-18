import React from 'react'
import { browserHistory } from 'react-router'

const renderPlaceList = (scenarioId, waypoints, updateUsersWaypoint) => (waypoints.map((waypoint, i) => (
  <button key={i} onClick={() => { browserHistory.replace(`/${scenarioId}/location/${waypoint._id}`), updateUsersWaypoint(waypoint._id, waypoint.coords) } }>{waypoint.waypointName}</button>
)))

const PlaceList = ({ scenarioId, waypoints, updateUsersWaypoint }) => (
  <div>
    {renderPlaceList(scenarioId, waypoints || [], updateUsersWaypoint)}
  </div>
)

export default PlaceList
