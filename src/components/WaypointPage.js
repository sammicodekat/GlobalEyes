import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getScenario } from '../actions/scenarioActions'
import { browserHistory } from 'react-router'
import Vouchers from './Vouchers'
import PoiList from './PoiList'

//USER - set the waypoint ID instead of name  for the user and read visited POI's. Add a field for
//scenario id. On componentWillMount, add the waypoint, false waypoint or poi into their
//respecitive arrays. Then map through and see if the waypoint has been visited.
//????? componentWillReceiveProps(nextProps) ??????

class WaypointPage extends Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {

  }

  openNotebook() {
    document.getElementById('notebook').className = 'open'
  }

  render() {
    let { waypoint } = this.props
    const { waypointName, pointsOfInterest, falseRoute, coords, links, text } = waypoint

    return (
      <div className="waypoint">
        <button className="notebookBtn" onClick={() => this.openNotebook()}><img src="/images/notebookBtn.png" alt="open notebook" /></button>
        <button className="mapBtn" onClick={() => browserHistory.replace(`/${this.props.params.id}/map`)}><img src="/images/mapBtn.png" alt="to map" /></button>
        <h1 className="waypointName">{waypointName}</h1>
        <div className="waypointImage"><img src={links[0]} alt={waypointName} /></div>
        <div className="waypointBody">
          <article className="infoBlock">
            <h3>About this Location</h3>
            <p>{text}</p>
          </article>
          <PoiList pois={pointsOfInterest} />
        </div>
      </div>
    )
  }
}

export default connect(state => ({ waypoint:state.waypoint }), dispatch => ({
  getWayPoint(id) {
    dispatch(getWayPoint(id))
  }
}))(WaypointPage)
