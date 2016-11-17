import React, { Component } from 'react'
import { connect } from 'react-redux'
import { browserHistory } from 'react-router'
import { getPoi } from '../actions/poiActions'
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
  //  this.props.dispatch(getPoi(this.props.params.id))
  // }

  openNotebook() {
    document.getElementById('notebook').className = 'open'
  }

  render() {
    let { poi, user } = this.props
    let { uid } = this.props
    //Clue needs to be changed to a single clue. I've renamed it but haven't reduced
    //the number of clues it holds
    let { poiName, clues, links, text } = poi

    return (
      <div className="poiPage">
        <button className="notebookBtn" onClick={() => this.openNotebook()}><img src="/images/notebookBtn.png" alt="open notebook" /></button>
        <button className="mapBtn" onClick={() => browserHistory.replace(`/${this.props.params.id}/map`)}><img src="/images/mapBtn.png" alt="to map" /></button>
        <div className="waypointSplash">
          <img src={links[1]} alt={poiName} />
        </div>
        <div className="waypointBody">
          <h1 className="waypointName">{poiName}</h1>
          <article className="infoBlock">
            <h3>About this Point of Interest</h3>
            <p>{text}</p>
          </article>
          <ClueList clues={clues} />
          <AddToNotebookButton poiName={poiName} clues={clues[0]} />
        </div>
      </div>
    )
  }
}

export default connect(state => ({ poi: state.poi, user: state.auth.user }), dispatch => ({
  getPoi(id) {
    dispatch(getPoi(id))
  }
}))(PointOfInterestPage)


