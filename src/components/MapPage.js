/* global document window */

import React, { Component } from 'react'
import { connect } from 'react-redux'
import { browserHistory } from 'react-router'
import GMap from './GMap'
import Vouchers from './Vouchers'
import PlaceList from './PlaceList'
import { getScenario } from '../actions/ScenarioActions'
import { updateUserObject } from '../actions/auth'

let index = 0
let leftover = []
let nextplaces = []
class MapPage extends Component {

  openNotebook = () => {
    document.getElementById('notebook').className = 'open'
  }

  openEndGame = () => {
    browserHistory.push('/:id/endgame')
  }

  componentWillMount(){
    if (this.props.userObj.vouchers === 0) {
      browserHistory.push(`You-Silly-Silly-Silly-Bad-Loser/gameover`)
    }
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

  shuffle = (array) => {
    let currentIndex = array.length
    let temporaryValue
    let randomIndex
    while (currentIndex !== 0) {
      randomIndex = Math.floor(Math.random() * currentIndex)
      currentIndex -= 1
      temporaryValue = array[currentIndex]
      array[currentIndex] = array[randomIndex]
      array[randomIndex] = temporaryValue
    }
    return array
  }

  render() {
    const { scenario, userObj } = this.props
    const { waypoints } = scenario
    let visited = []
    nextplaces = [waypoints[0]]
    let waypointMessage = <span className="mapMessage">To get started click on a waypoint below or the pointer icon <img src="/images/marker_new.png" alt="map marker"/> on the map.</span>

    if(userObj.currentWaypoint){
      waypointMessage = <span className="mapMessage">Select another waypoint. You've got {userObj.vouchers} travel vouchers left</span>
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

      if (leftover.length > 0) {
        leftover.forEach(a => {
          if (!nextplaces.includes(a)){
            nextplaces.push(a)
          }
        })
        leftover = []
      }

      leftover = nextplaces.filter(place => {
        if (!userObj.visitedWaypoints.includes(place._id)) {
          return place
        }
      })

      nextplaces = this.shuffle(leftover)
    }
    return (
      <div className="mapPage">
        <GMap google={window.google} scenario={scenario} index={index} nextplaces={nextplaces} coordsList={userObj.meowCoords} visited={visited} waypoints={waypoints} updateUsersWaypoint={this.updateUsersWaypoint} />
        <button className="notebookBtn" onClick={() => this.openNotebook()}>
          <img src="/images/notebookBtn.png" alt="" />
        </button>
        <div className="travelMenu">
          <div className="voucherBar">
            <Vouchers vouchers={this.props.userObj.vouchers} />
          </div>
          <div className="waypointButtons">
            {waypointMessage}
            <PlaceList updateUsersWaypoint={this.updateUsersWaypoint} waypoints={waypoints} scenarioId={scenario._id} index={index} coordsList={userObj.meowCoords} visited={visited} nextplaces={nextplaces} />
          </div>
        </div>
      </div>
    )
  }
}

export default connect(state => ({ scenario: state.scenario, userObj: state.userObj }), dispatch => ({
  getScenario(id) {
    dispatch(getScenario(id))
  }
}))(MapPage)
