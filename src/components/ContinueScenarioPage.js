import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getScenario } from '../actions/ScenarioActions'
import { browserHistory } from 'react-router'
import { getUserObj } from '../actions/auth'
import Vouchers from './Vouchers'

class ContinueScenarioPage extends Component {
  constructor(props) {
    super(props)
  }
  componentWillMount() {
    this.props.getScenario(this.props.userObj.scenarioId)
  }

  render() {
    const { userObj, scenario } = this.props
    const randomBackground = {
      backgroundImage: `url(/images/background${Math.floor(Math.random() * 2) + 1}.jpg)`
    }
    console.log( 'scenario.waypoints' , scenario.waypoints )
    console.log( 'userObj.currentWaypoint' , userObj.currentWaypoint )
    let currLocation = ''
    if(scenario.waypoints){
    let current = scenario.waypoints.filter( waypoint => waypoint._id == userObj.currentWaypoint)
    currLocation = current[0].waypointName
    }
    return (
      <div className="introPage">
        <div className="backgroundImage" style={randomBackground} />
        <div className="pageContent">
          <div className="intro">
            <h1>{scenario.scenarioName || ''}</h1>
            <h4>created by: {scenario.scenarioAuthor || ''}</h4>
            <div className="greeting">
              <p>Welcome back, {userObj.userName},</p>
              <p>When you last left you'd discovered {userObj.visitedWaypoints.length} waypoints on your journey.</p>
              <p>You have <b>{userObj.vouchers}</b> <i>travel vouchers</i> remaining, use them wisely.</p>
              <p>Your journey continues in <b>{currLocation}</b>.</p>
              <p>Good Luck!</p>
            </div>
            <div className="introVouchers">
              <Vouchers vouchers={userObj.vouchers} />
              <button onClick={() => browserHistory.push(`${scenario._id}/map`)}>Continue Adventure!</button>
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
  userObj: state.userObj }),
  dispatch => ({
    getScenario(id) {
      dispatch(getScenario(id))
    }
}))(ContinueScenarioPage)
