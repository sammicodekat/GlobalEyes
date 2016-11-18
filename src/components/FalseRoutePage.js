/* global document */
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { browserHistory } from 'react-router'
// import { getScenario } from '../actions/scenarioActions'
import { getWayPoint } from '../actions/wayPointsActions'

//USER - set the waypoint ID instead of name  for the user and read visited POI's. Add a field for
//scenario id. On componentWillMount, add the waypoint, false waypoint or poi into their
//respecitive arrays. Then map through and see if the waypoint has been visited.
//????? componentWillReceiveProps(nextProps) ??????

class FalseRoutePage extends Component {
  constructor(props) {
    super(props)
  }

  openNotebook() {
    document.getElementById('notebook').className = 'open'
  }

  render() {
    const { waypoint } = this.props
    const { id, falseRouteIndex } = this.props.params
    const { name, link, text } = waypoint.falseRoutes[falseRouteIndex]

    return (
      <div className="waypoint">
        <button className="notebookBtn" onClick={() => this.openNotebook()}><img src="/images/notebookBtn.png" alt="open notebook" /></button>
        <button className="mapBtn" onClick={() => browserHistory.replace(`/${id}/map`)}><img src="/images/mapBtn.png" alt="to map" /></button>
        <div className="waypointSplash">
          <img src={link} alt={name} />
        </div>
        <div className="waypointBody">
          <h1 className="waypointName">{name}</h1>
          <article className="infoBlock">
            <h3>About this Location:</h3>
            <p>{text}</p>
          </article>
        </div>
      </div>
    )
  }
}

export default connect(state => ({ waypoint: state.waypoint, userObj: state.userObj }), dispatch => ({
  getWayPoint(id) {
    dispatch(getWayPoint(id))
  }
}))(FalseRoutePage)
