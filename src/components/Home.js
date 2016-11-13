import React, { Component } from 'react'
import LogIn from './LogIn'

export default class Home extends Component {
  render() {
    return (
      <div>
        <LogIn />
        <h1 className="text-center">Globaleyes</h1>
        <h2>Home View</h2>
      </div>
    )
  }
}
