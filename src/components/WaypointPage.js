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
      pano: 'closed'
    }
  }

  componentWillMount() {
    this.props.getWayPoint(this.props.params.waypointId)
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
    const { waypoint } = this.props
    const { pano } = this.state
    const { waypointName, pointsOfInterest, falseRoute, coords, links, text } = waypoint

    const streetViewContainer = (
      <div id="streetViewContainer">
        <StreetView google={window.google} coords={coords} />
      </div>
    )

    return (
      <div className="waypoint">
        <button className="notebookBtn" onClick={() => this.openNotebook()}><img src="/images/notebookBtn.png" alt="open notebook" /></button>
        <button className="mapBtn" onClick={() => browserHistory.replace(`/${this.props.params.id}/map`)}><img src="/images/mapBtn.png" alt="to map" /></button>
        <button className="panoBtn" onClick={() => this.togglePano()}><img src="/images/pano.png" alt="open panorama" /></button>
        {pano === 'open' ? streetViewContainer : null}
        <div className="waypointSplash">
          <img src={links} alt={waypointName} />
        </div>
        <div className="waypointBody">
          <h1 className="waypointName">{waypointName}</h1>
          <article className="infoBlock">
            <h3>About this Location:</h3>
            <p>{text}</p>
          </article>
          <PoiList pois={pointsOfInterest} params={this.props.params} />
        </div>
      </div>
    )
  }
}

export default connect(state => ({ waypoint: state.waypoint, userObj: state.userObj }), dispatch => ({
  getWayPoint(id) {
    dispatch(getWayPoint(id))
  }
}))(WaypointPage)
