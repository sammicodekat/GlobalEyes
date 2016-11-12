import React, { Component } from 'react';
import { connect } from 'react-redux'
import { signInWithGoogle, signOut } from '../actions/auth'

@connect(state => ({
  loggedIn: state.auth.authenticated,
  user: state.auth.user
}), dispatch => ({
  logOut() {
    dispatch(signOut())
  },
  logIn() {
    dispatch(signInWithGoogle())
  }
}))

export default class LogIn extends Component {
  constructor(props){
    super(props)

    this._logIn = this._logIn.bind(this)
    this._logOut = this._logOut.bind(this)
  }

  _logIn() {
    this.props.logIn()
  }

  _logOut() {
    this.props.logOut()
  }

  render() {
    const { loggedIn } = this.props
    let logInButton =  <button onClick={this._logIn} className="logIn">Sign In</button>
    let logOutButton = <button onClick={this._logOut} className="logOut">Sign Out</button>
    return (
      <div>
        {loggedIn ? logOutButton : logInButton}
      </div>
    )
  }
}