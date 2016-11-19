import React, { Component } from 'react'
import { connect } from 'react-redux'
import { browserHistory } from 'react-router'
import { getScenario } from '../actions/ScenarioActions'
import { updateUserObject } from '../actions/auth'
import Vouchers from './Vouchers'

class OneScenarioPage extends Component {

  componentWillMount() {
    this.props.getScenario(this.props.params.id)
  }

  beginAdventure = () => {
    const { scenario } = this.props
    let updatedUserObj = this.props.userObj
    updatedUserObj.uid = this.props.user.uid
    updatedUserObj.scenarioId = scenario._id
    updatedUserObj.currentWaypoint = ''
    updatedUserObj.meowCoords = [scenario.waypoints[0].coords]
    // let visitedWaypoints = updatedUserObj.visitedWaypoints || []
    // visitedWaypoints = visitedWaypoints.filter(wp => {
    //   if(wp == scenario.waypoints[0]._id) return
    //   else return wp
    // })
    // visitedWaypoints = [...visitedWaypoints]
    updatedUserObj.visitedWaypoints = ['']
    // updatedUserObj['visitedFalsepoints'] = []
    updatedUserObj.pointsOfInterest = ['']
    updatedUserObj.notebook = {note: 'Sorry, you do not have any notes yet.'}
    // updatedUserObj['vouchers']--
    updateUserObject(updatedUserObj)
    browserHistory.replace(`/${scenario._id}/map`)
  }

  render() {
    const { scenario, userObj } = this.props
    const name = scenario.waypoints ? scenario.waypoints[0].waypointName : ''
    const randomBackground = {
      backgroundImage: `url(/images/background${Math.floor(Math.random() * 2) + 1}.jpg)`
    }
    return (
      <div className="introPage">
        <div className="backgroundImage" style={randomBackground} />
        <div className="pageContent">
          <div className="intro">
            <h1>{scenario.scenarioName || ''}</h1>
            <h4>created by: {scenario.scenarioAuthor || ''}</h4>
            <div className="greeting">
              <p>Greetings Traveller,</p>
              <p>You are about to embark on an amazing adventure.</p>
              <p>I have given you <b>{this.props.userObj.vouchers}</b> <i>travel vouchers</i> for your journey, use them wisely.</p>
              <p>Your journey begins in <b>{name}</b>.</p>
              <p>Good Luck!</p>
            </div>
            <div className="introVouchers">
              <Vouchers vouchers={userObj.vouchers} />
              <button onClick={this.beginAdventure}>Begin Adventure!</button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default connect(state => ({
  scenario: state.scenario,
  scenarios: state.scenarios,
  userObj: state.userObj,
  user: state.auth.user
}), dispatch => ({
  getScenario(id) {
    dispatch(getScenario(id))
  }
}))(OneScenarioPage)
