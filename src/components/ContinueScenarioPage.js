import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getScenario } from '../actions/ScenarioActions'
import { browserHistory } from 'react-router'
import { getUserObj } from '../actions/auth'
import Vouchers from './Vouchers'

class ContinueScenarioPage extends Component {
  componentWillMount() {
    this.props.getScenario(this.props.userObj.scenarioId)
  }
  placesVisited = () =>( this.props.userObj.visitedWaypoints.map((wp, i) => {
    if (wp === this.props.scenario.waypoints[i]._id) {
      return (
        <li key={i}>{this.props.scenario.waypoints[i].waypointName}</li>
      )
    }
  }))
  render() {
    const { userObj, scenario } = this.props
    const randomBackground = {
      backgroundImage: `url(/images/background${Math.floor(Math.random() * 2) + 1}.jpg)`
    }

    let currLocation = ''
    let places = ''
    if (scenario.waypoints){
      const current = scenario.waypoints.filter( waypoint => waypoint._id == userObj.currentWaypoint)
      currLocation = current[0].waypointName
      places = this.placesVisited()
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
              <p>When you last left you'd discovered <b>{userObj.visitedWaypoints.length}</b> amazing places:</p>
              <ul>{places}</ul>
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
