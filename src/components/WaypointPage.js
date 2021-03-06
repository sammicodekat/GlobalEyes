/* global window document */

import React, { Component } from 'react'
import { connect } from 'react-redux'
// import { getScenario } from '../actions/scenarioActions'
import { getWayPoint } from '../actions/wayPointsActions'
import { browserHistory } from 'react-router'
import Vouchers from './Vouchers'
import PoiList from './PoiList'
import StreetView from './StreetView'

class WaypointPage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      pano: 'closed',
      waypoint: {}
    }
  }

  componentWillMount() {
    const waypoint = this.props.scenario.waypoints.find(waypoint => (waypoint._id == this.props.params.waypointId))
    this.setState({ waypoint })
  }

  openNotebook() {
    document.getElementById('notebook').className = 'open'
  }

  togglePano() {
    const { pano } = this.state
    let toggled = 'closed'
    if (pano === 'closed') toggled = 'open'
    this.setState({ pano: toggled })
  }

  render() {
    const { waypoint } = this.state
    const { pano } = this.state
    const { waypointName, pointsOfInterest, coords, links, text } = waypoint
    let showPointsOfInterest = <div></div>
    let pointsOfInterestMessage = <div></div>

    const streetViewContainer = (
      <div id="streetViewContainer">
        <button className="closePano" onClick={() => this.togglePano()}><img src="/images/closeBtn.png" alt="close pano" /></button>
        <StreetView google={window.google} coords={coords} />
      </div>
    )

    if (pointsOfInterest.length > 0) {
      showPointsOfInterest = <PoiList pois={pointsOfInterest} params={this.props.params} />
    }

    if (this.props.userObj.visitedWaypoints < 2) {
      pointsOfInterestMessage = <h3 className="introMessage">Our world has some amazing places to see. When you travel to a new waypoint be sure to stop for a moment and enjoy the Points of Interest. Persistant explorers will be rewarded with clues on where to go to next and perhaps even given additional travel vouchers.</h3>
    }

    return (
      <div className="waypoint">
        <button className="notebookBtn" title="open notebook" onClick={() => this.openNotebook()}><img src="/images/notebookBtn.png" alt="open notebook" /></button>
        <button className="mapBtn" title="back to map" onClick={() => browserHistory.replace(`/${this.props.params.id}/map`)}><img src="/images/mapBtn.png" alt="to map" /></button>
        <button className="panoBtn" title="view 360 panorama" onClick={() => this.togglePano()}><img src="/images/pano.png" alt="open panorama" /></button>
        {pano === 'open' ? streetViewContainer : null}
        <div className="waypointSplash">
          <img src={links} alt={waypointName} />
        </div>
        <div className="waypointBody">
          <h1 className="waypointName">{waypointName}</h1>
          <article className="infoBlock">
            {pointsOfInterestMessage}
            <h3>About this Location:</h3>
            <p>{text}</p>
          </article>
          {showPointsOfInterest}
        </div>
      </div>
    )
  }
}

export default connect(state => ({ scenario: state.scenario, waypoint: state.waypoint, userObj: state.userObj }), dispatch => ({
  getWayPoint(id) {
    dispatch(getWayPoint(id))
  }
}))(WaypointPage)
