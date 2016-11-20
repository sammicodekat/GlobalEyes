import React, { Component } from 'react'
import { connect } from 'react-redux'
import { browserHistory } from 'react-router'
import { updateUserObject } from '../actions/auth'
import { ShareButtons, generateShareIcon } from 'react-share'
const { FacebookShareButton, GooglePlusShareButton, TwitterShareButton } = ShareButtons
const FacebookIcon = generateShareIcon('facebook')
const TwitterIcon = generateShareIcon('twitter')
const GooglePlusIcon = generateShareIcon('google')

class GameOverPage extends Component {

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

  clearUserData = () => {
    const updatedUserObj = this.props.userObj
    updatedUserObj.scenarioId = ''
    updatedUserObj.currentWaypoint = ''
    updatedUserObj.meowCoords = ['']
    updatedUserObj.visitedWaypoints = ''
    updatedUserObj.pointsOfInterest = ['']
    updatedUserObj.notebook = { note: 'Sorry, you do not have any notes yet.' }
    updateUserObject(updatedUserObj)
    browserHistory.push('/scenarios')
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
            <h1>{`Sorry ${this.props.userObj.userName} You're Out of Travel Vouchers.`}</h1>
            <div className="greeting">
              <h3>You Visited: </h3>
              <ul>{this.placesVisted()}</ul>
            </div>
            <div className='shares'>
              <FacebookShareButton
                url={shareUrl}
                title={title}
                className="sharebutton">
                <FacebookIcon
                  size={32}
                  round />
              </FacebookShareButton>
              <TwitterShareButton
                url={shareUrl}
                title={title}
                className="sharebutton">
                <TwitterIcon
                  size={32}
                  round />
              </TwitterShareButton>
              <GooglePlusShareButton
                url={shareUrl}
                className="sharebutton">
                <GooglePlusIcon
                  size={32}
                  round />
              </GooglePlusShareButton>
            </div>
            <div className="introVouchers">
              <button onClick={this.clearUserData}>Start Another Adventure</button>
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
