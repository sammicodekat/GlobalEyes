import React from 'react'
import { browserHistory } from 'react-router'

const renderPlaceList = (scenarioId, visited, nextplaces, updateUsersWaypoint ) => {
console.log('visited',visited)
console.log('nextplaces',nextplaces)
  visited.map((waypoint, i) => (
  <button className='visited' key={i} onClick={() => {browserHistory.replace(`/${scenarioId}/location/${waypoint._id}`), updateUsersWaypoint(waypoint._id, waypoint.coords) }}>{waypoint.waypointName}</button>
))
  nextplaces.map((waypoint, i) => (
  <button className='nextPlaces' key={i+20} onClick={() => {browserHistory.replace(`/${scenarioId}/location/${waypoint._id}`), updateUsersWaypoint(waypoint._id, waypoint.coords) } }>{waypoint.waypointName}</button>
))
 }

const PlaceList = (props) => (
  <div>
    <h4>hihih</h4>
    {renderPlaceList(props.scenarioId, props.visited, props.nextplaces, props.updateUsersWaypoint)}
  </div>
)

export default PlaceList
