import React, { Component } from 'react'
import { connect } from 'react-redux'
import GMap from './GMap'
import Vouchers from './Vouchers'
import PlaceList from './PlaceList'
import { getScenario } from '../actions/ScenarioActions'
import { updateUserObject } from '../actions/auth'
import { browserHistory } from 'react-router'

let index = 0

class MapPage extends Component {

  openNotebook = () => {
    document.getElementById('notebook').className = 'open'
  }

  openEndGame = () => {
    browserHistory.push('/:id/endgame')
  }
  componentWillMount() {
    this.props.getScenario(this.props.params.id)
  }

  updateUsersWaypoint = (newWaypoint, coords) => {
    let updatedUserObj = this.props.userObj
    if (updatedUserObj.currentWaypoint !== newWaypoint) {
      updatedUserObj.vouchers--
    }
    updatedUserObj.currentWaypoint = newWaypoint
    updatedUserObj.meowCoords = [
      ...updatedUserObj.meowCoords,
      coords
    ]
    let visitedWaypoints = [...updatedUserObj.visitedWaypoints] || []
    visitedWaypoints = visitedWaypoints.filter(wp => {
      if (wp == newWaypoint)
        return
      else
        return wp
    })
    visitedWaypoints = [
      ...visitedWaypoints,
      newWaypoint
    ]
    updatedUserObj['visitedWaypoints'] = visitedWaypoints
    updateUserObject(updatedUserObj)
  }
  findFirstWayPoint = (elem) => (elem.pointsOfInterest.length !== 0)
  render() {
    const {scenario, userObj} = this.props
    const {waypoints} = scenario
    let nextplaces = [waypoints[0]]
    let visited = []
    if(userObj.currentWaypoint){
    const id = userObj.currentWaypoint
    visited = waypoints.filter(waypoint => userObj.visitedWaypoints.includes(waypoint._id))
    const currWaypoint = waypoints.find(waypoint => waypoint._id == id)
    if (currWaypoint.pointsOfInterest.length !== 0) {
      index = waypoints.findIndex(elem => elem._id == id)
    }
    let curr = index
    const rest = waypoints.slice(curr + 1)
    const nextWayPointIndex = rest.findIndex(this.findFirstWayPoint)
    nextplaces = rest.slice(0, nextWayPointIndex + 1)
    nextplaces = nextplaces.filter(place => {
      if (!userObj.visitedWaypoints.includes(place._id)) {
        return place
      }
    })
    }
    return (
      <div className="mapPage">
        <GMap google={window.google} scenario={scenario} index={index} nextplaces={nextplaces} coordsList={userObj.meowCoords} visited={visited} waypoints={waypoints} updateUsersWaypoint={this.updateUsersWaypoint}/>
        <button className="notebookBtn" onClick={() => this.openNotebook()}>
          <img src="/images/notebookBtn.png" alt=""/>
        </button>
        <button className="notebookBtn"
          onClick={() => this.openEndGame()}>End Game</button>
        <div className="travelMenu">
          <div className="voucherBar">
            <Vouchers vouchers={this.props.userObj.vouchers}/>
          </div>
          <div className="waypointButtons">
            <PlaceList updateUsersWaypoint={this.updateUsersWaypoint} waypoints={waypoints} scenarioId={scenario._id} index={index} coordsList={userObj.meowCoords} visited={visited} nextplaces={nextplaces}/>
          </div>
        </div>
      </div>
    )
  }
}

export default connect(state => ({scenario: state.scenario, userObj: state.userObj}), dispatch => ({
  getScenario(id) {
    dispatch(getScenario(id))
  }
}))(MapPage)
