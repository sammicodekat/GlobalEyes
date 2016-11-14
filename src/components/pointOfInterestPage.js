import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getPoi } from '../actions/poiActions'
import { browserHistory } from 'react-router'
import Vouchers from './Vouchers'
import ClueList from './ClueList'

class PointOfInterestPage extends Component {
  constructor(props) {
    super(props)
  }
  // componentWillMount(){
  //  this.props.dispatch(getPoi(this.props.params.id))
  // }
  render() {
    let { poi } = this.props
    let { poiName, clues, links, text } = poi
    return (
      <div>
        <h5>{poiName}</h5>
        <p>{text}</p>
        <img src={links[0]} />
        <img src={links[1]} />
        <h4>Clues</h4>
        <ClueList clues={clues} />
      </div>
    )
  }
}

export default connect(state => ({ poi: state.poi }), dispatch => ({
  getPoi(id) {
    dispatch(getPoi(id))
  }
}))(PointOfInterestPage)
