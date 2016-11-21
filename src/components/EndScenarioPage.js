import React, { Component } from 'react'
import { connect } from 'react-redux'
import { browserHistory } from 'react-router'
import { ShareButtons, generateShareIcon } from 'react-share'
import { updateUserObject } from '../actions/auth'
const { FacebookShareButton, GooglePlusShareButton, TwitterShareButton } = ShareButtons
const FacebookIcon = generateShareIcon('facebook')
const TwitterIcon = generateShareIcon('twitter')
const GooglePlusIcon = generateShareIcon('google')

class EndScenarioPage extends Component {
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

  placesVisted = () => {
    const { userObj, scenario } = this.props
    return scenario.waypoints.map((wp, i) => {
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
    const shareUrl = 'https://murmuring-badlands-17800.herokuapp.com/'
    const title = `I just travelled to ${this.props.userObj.visitedWaypoints.length} countires! Checkout Globaleyes @`
    return (
      <div className="introPage">
        <div className="backgroundImage" style={randomBackground} />
        <div className="pageContent">
          <div className="intro">
            <h1>{`Congrats ${this.props.userObj.userName} You've Completed ${this.props.scenario.scenarioName}`}</h1>
            <div className="greeting">
              <h3>Your travel stats: </h3>
              <p>You visited <b>{`${this.props.userObj.visitedWaypoints.length}`}</b> amazing places:</p>
              <ul className="visitedPlaces">{this.placesVisted()}</ul>
              {/* <p>You used <b>{`${this.props.scenario.vouchers - this.props.userObj.vouchers}`}</b> <i>travel vouchers</i> on your journey</p> */}
              <p>You have <b>{`${this.props.userObj.vouchers}`}</b> <i>travel vouchers</i> remaining</p>
            </div>
            <div className="introVouchers">
              <div className="shares">
                Share:
                <FacebookShareButton url={shareUrl} title={title} className="shareButton">
                  <FacebookIcon size={32} round />
                </FacebookShareButton>

                <TwitterShareButton url={shareUrl} title={title} className="shareButton">
                  <TwitterIcon size={32} round />
                </TwitterShareButton>

                <GooglePlusShareButton url={shareUrl} className="shareButton">
                  <GooglePlusIcon size={32} round />
                </GooglePlusShareButton>
              </div>
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

export default connect(mapStateToProps, null)(EndScenarioPage)
