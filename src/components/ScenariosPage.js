import React, { Component } from 'react'
import { connect } from 'react-redux'
import ScenariosList from './ScenariosList'
import { getScenarios } from '../actions/scenariosActions'
import { browserHistory } from 'react-router'
import { storeUserObj } from '../actions/userActions'

//USER - bring in user info

class ScenariosPage extends Component {
  constructor(props) {
    super(props)

  }

  componentWillReceiveProps(newProps) {
    let userObj = { 
      currentWaypoint: {},
      noteBook: {},
      uid: newProps.user.uid,
      userName: newProps.user.displayName,
      vouchers: 0 
    }
    storeUserObj(userObj)
  }

  render() {
    let userLoggedIn
    if (this.props.user.photoURL) {
      userLoggedIn = (
        <div key={this.props.user.uid}>
          <img src={this.props.user.photoURL} alt="" />
          <p>{this.props.user.displayName}</p>
          <button>Continue: {this.props.userId}</button>
        </div>
        )
    } else {
      userLoggedIn = <div />
    }

    const { scenarios } = this.props
    return (
      <div>
        <h1>Scenarios</h1>
        {userLoggedIn}
        <ScenariosList scenarios={scenarios} />
        <button onClick={() => browserHistory.push('/create')}>+</button>
      </div>
    )
  }
}

function mapStateToProps(state) {
  console.log("I am state in mapStateToProps: ", state)
  return { 
    scenarios: state.scenarios, 
    user: state.auth.user,
    userId: state.userId
  }
}

export default connect(mapStateToProps, dispatch => ({
  getScenarios() {
    dispatch(getScenarios())
  }
}))(ScenariosPage)
