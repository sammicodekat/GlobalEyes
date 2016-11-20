import React, { Component } from 'react'
import { connect } from 'react-redux'
import { browserHistory } from 'react-router'
import { updateUserObject } from '../actions/auth'

class GameOverPage extends Component {
  constructor(props) {
    super(props)
  }

  placesVisted = () => {
    const { userObj, scenario } = this.props
    return scenario.waypoints.map((wp,i) => {
      if (userObj.visitedWaypoints.includes(wp._id)) {
        return (
          <li key={i}>{wp.waypointName}</li>
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
            <h1>{`Sorry ${this.props.userObj.userName} You're Out of Travel Vouchers`}</h1>
            <div className="greeting">
              <h3>You Visited: </h3>
              <ul>{this.placesVisted()}</ul>
            </div>
            <div className="introVouchers">
              <button onClick={ () => { browserHistory.push('/scenarios') } }>Start Another Adventure</button>
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

export default connect(mapStateToProps, null)(GameOverPage)
