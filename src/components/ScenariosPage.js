import React, { Component } from 'react'
import { connect } from 'react-redux'
import ScenariosList from './ScenariosList'
import { getScenarios } from '../actions/ScenariosActions'

class ScenariosPage extends Component {
  constructor(props) {
    super(props)
  }

  componentWillMount() {
    this.props.getScenarios()
  }

  render() {
    let userLoggedIn
    if (this.props.user.photoURL) {
      userLoggedIn = (
        <div key={this.props.user.uid}>
          <img src={this.props.user.photoURL} alt="" />
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
        <button>+</button>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    scenarios: state.scenariosReducer,
    user: state.auth.user
  }
}

export default connect(mapStateToProps, dispatch => ({
  getScenarios() {
    dispatch(getScenarios())
  }
}))(ScenariosPage)
