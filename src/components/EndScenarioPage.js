import React, { Component } from 'react'
import { connect } from 'react-redux'
// import { browserHistory } from 'react-router'
import { updateUserObject } from '../actions/auth'

class EndScenarioPage extends Component {
  constructor(props) {
    super(props)
  }

  placesVisted = () => {
    const { userObj, scenario } = this.props
    return userObj.visitedWaypoints.map((wp, i)=> {
      if(wp === scenario.waypoints[i]._id) {
         return (
          <li key={i}>{scenario.waypoints[i].waypointName}</li>
        )
      }
    })
  }
 
  render() {
    const randomBackground = {
      backgroundImage: `url(/images/background${Math.floor(Math.random() * 2) + 1}.jpg)`
    }
    return (
      <div className="introPage">
        <div className="backgroundImage" style={randomBackground} />
        <div className="pageContent">
          <div className="intro">
            <h1>{`Congrats ${this.props.userObj.userName} You've Completed ${this.props.scenario.scenarioName}`}</h1>
            <div className="greeting">
              <h3>Your travel stats: </h3>
              <p>You visited <b>{`${this.props.scenario.vouchers - this.props.userObj.vouchers}`}</b> amazing places:</p>
              <ul>{this.placesVisted()}</ul> 
              <p>You used <b>{`${this.props.scenario.vouchers - this.props.userObj.vouchers}`}</b> <i>travel vouchers</i> on your journey</p>
              <p>You have <b>{`${this.props.userObj.vouchers}`}</b> <i>travel vouchers</i> remaining</p>
            </div>
            <div className="introVouchers">
              <button>Start Another Adventure</button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    userObj: state.userObj,
    scenario: state.scenario
  }
}

export default connect(mapStateToProps, null)(EndScenarioPage)
