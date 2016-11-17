import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getPoi } from '../actions/poiActions'
import { browserHistory } from 'react-router'
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
  render() {
    let { poi, user } = this.props
    let { uid } = this.props
    //Clue needs to be changed to a single clue. I've renamed it but haven't reduced
    //the number of clues it holds
    let { poiName, clues, links, text } = poi
    return (
      //JM - made a dummy key to rid my screen of the error. A better key will need to be made
      <div key={`${poiName} += ${text}`}>
        <h5>{poiName}</h5>
        <p>{text}</p>
        <img src={links[0]} />
        <img src={links[1]} />
        <h4>Clues</h4>
        <ClueList clues={clues} />
        <AddToNotebookButton poiName={poiName} clues={clues[0]}/>
      </div>
    )
  }
}

export default connect(state => ({ poi: state.poi, user: state.auth.user }), dispatch => ({
  getPoi(id) {
    dispatch(getPoi(id))
  }
}))(PointOfInterestPage)


