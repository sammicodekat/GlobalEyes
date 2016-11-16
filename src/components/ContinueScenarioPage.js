import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getScenario } from '../actions/scenarioActions'
import { browserHistory } from 'react-router'
import { getUserObj } from '../actions/userActions'


//USER - pull user name or use anon(will have a UID???)

class ContinueScenarioPage extends Component {
  constructor(props) {
    super(props)
  }

  componentWillMount() {
    // this.props.getScenario(this.props.params.id)
    // if(this.props.gameObj.currentWayPoint) {
    //   getWayPoint(this.props.gameObj.currentWayPoint)
    // } else {
    //   let updatedGameObj = this.props.gameObj
    //   updatedGameObj[currentWayPoint] = this.props.waypoint._id
    //   console.log('WaypointPage - updatedGameObj: ', updatedGameObj)
      //   scenarioId: 'scenarioId',
      //   currentWaypoint: 'waypointId',
      //   visitedWaypoints: [],
      //   visitedFalsepoints: [],
      //   pointsOfInterest: [],
      //   notebook: {},
      //   vouchers: 0
      // }
      // updateGameObj(userObj)
    // }
  }

  render() {
    // const { scenario } = this.props
    const scenario = this.props.scenarios[this.props.params.id-1]
    const { vouchers } = scenario

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
              <p>Welcome back, Traveller,</p>
              <p>When you last left you'd discovered {scenario.waypoints.length} waypoints on your journey.</p>
              <p>You have <b>{vouchers}</b> <i>travel vouchers</i> remaining, use them wisely.</p>
              <p>Your journey continues in <b>{scenario.waypoints[0].waypointName}</b>.</p>
              <p>Good Luck!</p>
            </div>
            <div className="introVouchers">
              <Vouchers vouchers={vouchers} />
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
  gameObj: state.gameObj }),
  dispatch => ({
    getScenario(id) {
      dispatch(getScenario(id))
    }
}))(ContinueScenarioPage)
