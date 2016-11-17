import React, { Component } from 'react'
import { connect } from 'react-redux'
import { browserHistory } from 'react-router'
import { getPoi } from '../actions/poiActions'
import { getWayPoint } from '../actions/wayPointsActions'
import Vouchers from './Vouchers'
import ClueList from './ClueList'
import AddToNotebookButton from './AddToNotebookButton'

//USER - set this as a vistied POI
//Pull poi off of the currentWaypoint object and then store into
//a visitedPOIS array. Store the mongoDB-ID of the POI.


class PointOfInterestPage extends Component {
  constructor(props) {
    super(props)
  }
  // componentWillMount(){
  //  this.props.getPoi(this.props.params.poiId)
      // this.props.getWayPoint(this.props.params.waypointId)
  // }

  openNotebook() {
    document.getElementById('notebook').className = 'open'
  }

  render() {
    let { poi, user, waypoint } = this.props
    let { uid } = this.props
    const  waypointName = waypoint.waypointName

    //Clue needs to be changed to a single clue. I've renamed it but haven't reduced
    //the number of clues it holds
    let { poiName, clues, links, text } = poi
    return (
      <div className="poiPage">
        <button className="notebookBtn" onClick={() => this.openNotebook()}><img src="/images/notebookBtn.png" alt="open notebook" /></button>
        <button className="mapBtn" onClick={() => browserHistory.replace(`/${this.props.params.id}/map`)}><img src="/images/mapBtn.png" alt="to map" /></button>
        <div className="waypointSplash">
          <img src={links} alt={poiName} />
        </div>
        <div className="waypointBody">
          <h1 className="waypointName">{poiName}</h1>
          <article className="infoBlock">
            <h3>About this Point of Interest</h3>
            <p>{text}</p>
          </article>
          <ClueList clues={clues} waypointName={waypointName}/>
          <AddToNotebookButton poiName={poiName} clues={clues} waypointName={waypointName}/>
        </div>
      </div>
    )
  }
}

export default connect(state => ({ poi: state.poi, user: state.auth.user, waypoint: state.waypoint }), dispatch => ({
  getPoi(id) {
    dispatch(getPoi(id))
  },
  getWayPoint(id) {
    dispatch(getWayPoint(id))
 }
}))(PointOfInterestPage)
