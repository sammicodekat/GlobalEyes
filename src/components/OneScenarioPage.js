import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getScenario } from '../actions/scenarioActions'
import { browserHistory } from 'react-router'
import { updateUserObject } from '../actions/userActions'

import Vouchers from './Vouchers'

//USER - pull user name or use anon(will have a UID???)

class OneScenarioPage extends Component {
  constructor(props) {
    super(props)
  }

  // componentWillMount() {
  //   // this.props.getScenario(this.props.params.id)
  // }

  beginAdventure = () => {
    const scenario = this.props.scenarios[this.props.params.id-1]
    console.log(this.props.gameObj)
    let updatedGameObj = this.props.gameObj
    updatedGameObj['uid'] = this.props.userObj
    updatedGameObj['scenarioId'] = scenario._id
    updatedGameObj['currentWaypoint'] = scenario.waypoints[0]._id
    updatedGameObj['visitedWaypoints'] = []
    updatedGameObj['visitedFalsepoints'] = []
    updatedGameObj['pointsOfInterest'] = [],
    updatedGameObj['notebook'] = {},
    updatedGameObj['vouchers'] = scenario.vouchers
    updateUserObject(updatedGameObj)
    browserHistory.push(`${scenario._id}/map`)
  }

  render() {
    // const { scenario } = this.props
    const scenario = this.props.scenarios[this.props.params.id-1]
    const { vouchers } = scenario

    const randomBackground = {
      backgroundImage: `url(/images/background${Math.floor(Math.random() * 2) + 1}.jpg)`
    }
    //delete to here
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
              <p>I have given you <b>{vouchers}</b> <i>travel vouchers</i> for your journey, use them wisely.</p>
              <p>Your journey begins in <b>{scenario.waypoints[0].waypointName}</b>.</p>
              <p>Good Luck!</p>
            </div>
            <div className="introVouchers">
              <Vouchers vouchers={vouchers} />
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
  gameObj: state.gameObj, 
  userObj: state.userObj 
}), dispatch => ({
  getScenario(id) {
    dispatch(getScenario(id))
  }
}))(OneScenarioPage)
