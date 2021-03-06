/* global document window */

import React, { Component } from 'react'
import { connect } from 'react-redux'
import { browserHistory } from 'react-router'
import { getPoi } from '../actions/poiActions'
import { getWayPoint } from '../actions/wayPointsActions'
// import Vouchers from './Vouchers'
import ClueList from './ClueList'
import AddToNotebookButton from './AddToNotebookButton'
import StreetView from './StreetView'
import { updateUserObject } from '../actions/auth'


class PointOfInterestPage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      pano: 'closed',
      waypoint: {},
      poi: {}
    }
  }

  componentWillMount() {
    // this.props.getPoi(this.props.params.poiId)
  const waypoint = this.props.scenario.waypoints.find(waypoint => (waypoint._id == this.props.params.waypointId))
  const poi = waypoint.pointsOfInterest.find( poi => (poi._id == this.props.params.poiId))
  this.setState({ waypoint, poi })
  }

  componentDidMount() {
    this.voucherGamble()
  }

  togglePano() {
    const { pano } = this.state
    let toggled = 'closed'
    if (pano === 'closed') toggled = 'open'
    this.setState({ pano: toggled })
  }

  checkEndGame = (id) => {
    const { waypoints } = this.props.scenario
    const wpIndex = id
    const finalWp = waypoints[waypoints.length - 1]._id
    let isLast = ''
    if (wpIndex === finalWp) isLast = <button className="endgameBtn" onClick={() => this.openEndGame()}><img src="/images/endgame.png" alt="end game" /></button>
    return isLast
  }

  openEndGame = () => {
    browserHistory.push('/:id/endgame')
  }

  openNotebook() {
    document.getElementById('notebook').className = 'open'
  }

  voucherGamble() {
    let updatedUserObj = this.props.userObj
    const dice = Math.random()
    if (dice > 0.7) {
      updatedUserObj.vouchers += 1
      updateUserObject(updatedUserObj)
    }
  }

  render() {
    const { scenario, userObj } = this.props
    // const { uid } = this.props
    const { pano, waypoint, poi } = this.state
    const { waypointName } = waypoint
    const { poiName, clues, links, text, coords } = poi

    const streetViewContainer = (
      <div id="streetViewContainer">
        <button className="closePano" onClick={() => this.togglePano()}><img src="/images/closeBtn.png" alt="close pano"/></button>
        <StreetView google={window.google} coords={coords} />
      </div>
    )

    let clueDisplay = <div></div>
    let buttonDisplay = <div></div>
    let pointOfInterestMessage = <div></div>

    if(clues) {
     clueDisplay = <ClueList clues={clues} waypointName={waypointName} />
     buttonDisplay = <AddToNotebookButton poiName={poiName} clues={clues} waypointName={waypointName} />
    }

    if(userObj.pointsOfInterest && (poi._id === userObj.pointsOfInterest[0]._id || poi._id === userObj.pointsOfInterest[1]._id) ) {
      pointOfInterestMessage = <h3 className="introMessage">Look at you, you beautiful explorer you, you've arrived at a Point of Interest. Read more about this space below, click on the panorama button for a 360 view or, if you're lucky enough to have found one, read the clue that can help guide you to the next destination.</h3>
    }

    return (
      <div className="poiPage">
        <button className="notebookBtn" title="open notebook" onClick={() => this.openNotebook()}><img src="/images/notebookBtn.png" alt="open notebook" /></button>
        <button className="backBtn" onClick={browserHistory.goBack}><img src="/images/backArrow.png" alt="back to waypoint" />back to waypoint</button>
        {this.checkEndGame(this.props.params.waypointId)}
          <button className="mapBtn" title="back to map" onClick={() => browserHistory.replace(`/${this.props.params.id}/map`)}><img src="/images/mapBtn.png" alt="to map" /></button>
          <button className="panoBtn" title="view 360 panorama" onClick={() => this.togglePano()}><img src="/images/pano.png" alt="open panorama" /></button>
          {pano === 'open' ? streetViewContainer : null}
          <div className="waypointSplash">
            <img src={links} alt={poiName} />
        </div>
        <div className="waypointBody">
          <h1 className="waypointName">{poiName}</h1>
          <article className="infoBlock">
          {pointOfInterestMessage}
            <h3>About this Point of Interest</h3>
            <p>{text}</p>
          </article>
          <div className="poiList">
            {clueDisplay}
            {buttonDisplay}
          </div>
        </div>
      </div>
    )
  }
}

export default connect(state => ({ poi: state.poi, user: state.auth.user, scenario: state.scenario, userObj: state.userObj }), dispatch => ({
  getPoi(id) {
    dispatch(getPoi(id))
  }
}))(PointOfInterestPage)
