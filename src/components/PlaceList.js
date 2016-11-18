import React from 'react'
import {browserHistory} from 'react-router'

const renderVisited = (scenarioId, visited, nextplaces, updateUsersWaypoint) => (
    visited.map((waypoint, i) => (
        <button className='visited' key={i} onClick={() => {
            browserHistory.replace(`/${scenarioId}/location/${waypoint._id}`),
            updateUsersWaypoint(waypoint._id, waypoint.coords)
        }}>{waypoint.waypointName}</button>
    ))
)

const renderNext = (scenarioId, visited, nextplaces, updateUsersWaypoint) => (
    nextplaces.map((waypoint, i) => (
        <button className='nextPlaces' key={i + 20} onClick={() => {
            browserHistory.replace(`/${scenarioId}/location/${waypoint._id}`),
            updateUsersWaypoint(waypoint._id, waypoint.coords)
        }}>{waypoint.waypointName}</button>
    ))
)

const PlaceList = (props) => (
    <div>
      <h4>hihih</h4>
      {renderVisited(props.scenarioId, props.visited, props.nextplaces, props.updateUsersWaypoint)}
      {renderNext(props.scenarioId, props.visited, props.nextplaces, props.updateUsersWaypoint)}
    </div>
)

export default PlaceList
