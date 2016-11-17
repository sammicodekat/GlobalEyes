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
  componentWillMount() {
    this.props.getScenario(this.props.params.id)
  }

  render() {
    const scenario = this.props
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
            <Vouchers vouchers={vouchers} />
          </div>
          <div className="waypointButtons">
            <PlaceList waypoints={waypoints} scenarioId={scenario._id} />
          </div>
        </div>
      </div>
    )
  }
}

export default connect(state => ({ scenario: state.scenario, scenarios: state.scenarios }), dispatch => ({
  getScenario(id) {
    dispatch(getScenario(id))
  }
}))(MapPage)
