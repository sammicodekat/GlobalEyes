import React, { Component } from 'react'
import { connect } from 'react-redux'
import ScenariosList from './ScenariosList'
import { getScenarios } from '../actions/scenariosActions'
import { browserHistory } from 'react-router'
import { getUserObj } from '../actions/auth'


//USER - bring in user info

class ScenariosPage extends Component {
  constructor(props) {
    super(props)

  }

  // componentWillReceiveProps(newProps) {
  //   let userObj = {
  //     // currentWaypoint: {},
  //     // noteBook: {note: 'Sorry, you do not have any notes yet.'},
  //     uid: newProps.user.uid,
  //     userName: newProps.user.displayName,
  //     // vouchers: 0
  //   }
  //   storeUserObj(userObj)
  // }

  continue = () => {
    // getUserObj(this.props.userObj)
    browserHistory.push('/continue')
  }

  render() {
    const randomBackground = {
      backgroundImage: `url(/images/background${Math.floor(Math.random() * 2) + 1}.jpg)`
    }

    let userLoggedIn
    if (this.props.user.photoURL) {
      userLoggedIn = (
        <div key={this.props.user.uid} className="userProfile">
          <span>{this.props.user.displayName || 'traveller'}</span>
          <img src={this.props.user.photoURL} alt="" />
        </div>
        )
    } else {
      userLoggedIn = <div />
    }

    const { scenarios } = this.props
    return (
      <div>
        <div className="backgroundImage" style={randomBackground} />
        <div className="pageContent">
          {userLoggedIn}
          <h1 className="appTitle">Globaleyes</h1>
          <div className="scenarios">
            <h2>Scenarios</h2>
            <button id={this.props.userId} className="continue" onClick={() => browserHistory.push('/continue')}>Continue Last Scenario</button>
            <ScenariosList scenarios={scenarios} />
            <button onClick={() => browserHistory.push('/create')}>+</button>
          </div>
        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    scenarios: state.scenarios,
    user: state.auth.user,
    userObj: state.userObj
  }
}

export default connect(mapStateToProps, dispatch => ({
  getScenarios() {
    dispatch(getScenarios())
  }
}))(ScenariosPage)


