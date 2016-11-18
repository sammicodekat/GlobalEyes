/* global window document */

import React, { Component } from 'react'
import { connect } from 'react-redux'
import GMap from './GMap'
import Vouchers from './Vouchers'
import PlaceList from './PlaceList'
import { getScenario } from '../actions/ScenarioActions'

//USER - bring in the currentWaypoint & vouchers

class MapPage extends Component {

  openNotebook = () => {
    document.getElementById('notebook').className = 'open'
  }
  // componentWillMount() {
  //   this.props.getScenario(this.props.params.id)
  // }

  render() {
    const { scenario, userObj } = this.props
    const { waypoints } = scenario
    const id = userObj.currentWaypoint
    const index = waypoints.findIndex(elem => elem._id == id)
    const visited = userObj.visitedWaypoints
    return (
      <div className="mapPage">
        <GMap google={window.google} scenario={scenario} index={index} coordsList={userObj.meowCoords} visited={visited}/>
        <button className="notebookBtn"
          onClick={() => this.openNotebook()}>
          <img src="/images/notebookBtn.png" alt="" />
        </button>
        <div className="travelMenu">
          <div className="voucherBar">
            <Vouchers vouchers={this.props.userObj.vouchers} />
          </div>
          <div className="waypointButtons">
            <PlaceList waypoints={waypoints} scenarioId={scenario._id} index={index} coordsList={userObj.meowCoords} visited={visited} />
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
