import React, { Component } from 'react'
import { connect } from 'react-redux'
import GMap from './GMap'
import Vouchers from './Vouchers'
import PlaceList from './PlaceList'
import { getScenario } from '../actions/ScenarioActions'
import { updateUserObject } from '../actions/auth'

class MapPage extends Component {

  openNotebook = () => {
    document.getElementById('notebook').className = 'open'
  }
  // componentWillMount() {
  //   this.props.getScenario(this.props.params.id)
  // }

updateUsersWaypoint = (newWaypoint, coords) => {
  let updatedUserObj = this.props.userObj
  if(updatedUserObj.currentWaypoint !== newWaypoint) {
    updatedUserObj['vouchers']--
  }
  updatedUserObj.currentWaypoint = newWaypoint
  updatedUserObj['meowCoords'] = [...updatedUserObj['meowCoords'], coords]
  let visitedWaypoints = [...updatedUserObj.visitedWaypoints] || []
  visitedWaypoints = visitedWaypoints.filter(wp => {
    if(wp == newWaypoint) return
    else return wp
  })
  visitedWaypoints = [...visitedWaypoints, newWaypoint]
  updatedUserObj['visitedWaypoints'] = visitedWaypoints
  updateUserObject(updatedUserObj)
}

  render() {
    const { scenario } = this.props
    const { vouchers, waypoints } = scenario

    return (
      <div className="mapPage">
        <GMap google={window.google} scenario={scenario} />
        <button className="notebookBtn"
          onClick={() => this.openNotebook()}>
          <img src="/images/notebookBtn.png" alt="" />
        </button>
        <div className="travelMenu">
          <div className="voucherBar">
            <Vouchers vouchers={this.props.userObj.vouchers} />
          </div>
          <div className="waypointButtons">
            <PlaceList updateUsersWaypoint={this.updateUsersWaypoint} waypoints={waypoints} scenarioId={scenario._id} />
          </div>
        </div>
      </div>
    )
  }
}

export default connect(state => ({ scenario: state.scenario, scenarios: state.scenarios, userObj: state.userObj }), dispatch => ({
  getScenario(id) {
    dispatch(getScenario(id))
  }
}))(MapPage)
