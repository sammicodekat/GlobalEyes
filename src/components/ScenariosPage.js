import React, { Component } from 'react'
import { connect } from 'react-redux'
import ScenariosList from './ScenariosList'
import { getScenarios } from '../actions/scenariosActions'
import { browserHistory } from 'react-router'
import { getUserObj, updateUserObject } from '../actions/auth'

class ScenariosPage extends Component {
  constructor(props) {
    super(props)
    this.state = { disable: true }
  }
  componentWillMount() {
    this.props.getScenarios()
  }
  componentWillReceiveProps(newProps) {
    if (newProps.userObj.visitedWaypoints) {
      this.setState({ disable: false })
    }
  }
  //Adds vouchers to the Firebase userObj
  setVouchers = (vouchers) => {
    let updatedUserObj =  this.props.userObj
    updatedUserObj.vouchers = vouchers
    updatedUserObj.visitedWaypoints = []
    updateUserObject(updatedUserObj)
  }

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
    const { disable } = this.state
    return (
      <div>
        <div className="backgroundImage" style={randomBackground} />
        <div className="pageContent">
          {userLoggedIn}
          <h1 className="appTitle">Globaleyes</h1>
          <div className="scenarios">
            <h2>Scenarios</h2>
            <button id={this.props.userId} disabled={disable} className="continue" onClick={() => browserHistory.push('/continue')}>Continue Last Scenario</button>
            <ScenariosList setVouchers={this.setVouchers} scenarios={scenarios} />
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
