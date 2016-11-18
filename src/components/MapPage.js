import React, { Component } from 'react'
import { connect } from 'react-redux'
import GMap from './GMap'
import Vouchers from './Vouchers'
import PlaceList from './PlaceList'
import { getScenario } from '../actions/ScenarioActions'
import { updateUserObject } from '../actions/auth'

class MapPage extends Component {

  componentWillMount() {
    this.props.getScenario(this.props.params.id)
  }
  openNotebook = () => {
    document.getElementById('notebook').className = 'open'
  }

  updateUsersWaypoint = (newWaypoint, coords) => {
    let updatedUserObj = this.props.userObj
    if(updatedUserObj.currentWaypoint !== newWaypoint) {
      updatedUserObj.vouchers--
    }
    updatedUserObj.currentWaypoint = newWaypoint
    updatedUserObj.meowCoords = [...updatedUserObj.meowCoords, coords]
    let visitedWaypoints = [...updatedUserObj.visitedWaypoints] || []
    visitedWaypoints = visitedWaypoints.filter(wp => {
      if(wp == newWaypoint) return
      else return wp
    })
    visitedWaypoints = [...visitedWaypoints, newWaypoint]
    updatedUserObj['visitedWaypoints'] = visitedWaypoints
    updateUserObject(updatedUserObj)
    }
  findFirstWayPoint = (elem) => {
  console.log('elem',elem)
return elem.pointsOfInterest.length !== 0}

  render() {
    const { scenario, userObj } = this.props
    const { waypoints } = scenario
    const id = userObj.currentWaypoint
    const index = waypoints.findIndex(elem => elem._id == id)
    const visited = waypoints.filter(waypoint => userObj.visitedWaypoints.includes(waypoint._id))
    console.log('waypoints',waypoints)
    const rest = waypoints.slice(index+1)
    console.log('rest',rest)
    const nextWayPointIndex = rest.findIndex(this.findFirstWayPoint)
    console.log("nextWayPointIndex",nextWayPointIndex)

    const nextplaces = waypoints.slice(index+1, nextWayPointIndex+1)
    return (
      <div className="mapPage">
        <GMap google={window.google} scenario={scenario} index={index} nextplaces={nextplaces} coordsList={userObj.meowCoords} visited={visited} waypoints={waypoints}/>
        <button className="notebookBtn"
          onClick={() => this.openNotebook()}>
          <img src="/images/notebookBtn.png" alt="" />
        </button>
        <div className="travelMenu">
          <div className="voucherBar">
            <Vouchers vouchers={this.props.userObj.vouchers} />
          </div>
          <div className="waypointButtons">
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
