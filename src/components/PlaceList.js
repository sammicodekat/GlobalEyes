import React from 'react'
import { browserHistory } from 'react-router'

const findFirstWayPoint = (elem) => {
if(!elem.pointsOfInterest){
return elem
}
}

const renderPlaceList = (scenarioId, waypoints, user) => {
  const number = user.visitedWaypoints.length
  const rest = waypoints.slice(number)
  const nextWayPointIndex = rest.findIndex(findFirstWayPoint)
  const visited = waypoints.slice(0, number)
waypoint[PointOfInterest]
  return visited.map((waypoint, i) => (
  <button key={i} onClick={() => browserHistory.replace(`/${scenarioId}/location/${waypoint._id}`)}>{waypoint.waypointName}</button>
)) }

const PlaceList = ({ scenarioId, waypoints, user }) => (
  <div>
    {renderPlaceList(scenarioId, waypoints, user || [])}
  </div>
)

export default PlaceList
