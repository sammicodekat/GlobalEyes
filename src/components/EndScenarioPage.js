import React, { Component } from 'react'
import { connect } from 'react-redux'
import { browserHistory } from 'react-router'
import { updateUserObject } from '../actions/auth'

class EndScenarioPage extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { vouchers } = scenario
    const randomBackground = {
      backgroundImage: `url(/images/background${Math.floor(Math.random() * 2) + 1}.jpg)`
    }
    return (
      <div className="introPage">
        <div className="backgroundImage" style={randomBackground} />
        <div className="pageContent">
          <div className="intro">
            <h1>{`Congrats ${userObj.displayName} You've Completed ${scenario.scenarioName}`}</h1>
            <div className="greeting">
              <h3>Your travel stats: </h3>
              <p>You visited {`${userObj.visitedWaypoints.length}`} amazing places</p>
              <p>You used <b>{vouchers}</b> <i>travel vouchers</i> on your journey</p>
              <p>Your journey begins in <b>{name}</b>.</p>
            </div>
            <div className="introVouchers">
              <button onClick={this.beginAdventure}>Start Another Adventure</button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default connect(state => ({
  scenario: state.scenario,
  userObj: state.userObj
}), dispatch => ({
  getScenario(id) {
    dispatch(getScenario(id))
  }
}))(EndScenarioPage)
