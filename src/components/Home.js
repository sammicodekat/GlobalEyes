import React, { Component } from 'react'
import LogIn from './LogIn'

export default class Home extends Component {
  render() {
    const randomBackground = {
      backgroundImage: `url(/images/background${Math.floor(Math.random() * 2) + 1}.jpg)`
    }
    return (
      <div>
        <div className="backgroundImage" style={randomBackground} />
        <div className="pageContent loginPage">
          <h1 className="appTitle">Globaleyes</h1>
          <LogIn />
          <footer>&copy; Copyright 2016 The Group</footer>
        </div>
      </div>
    )
  }
}
