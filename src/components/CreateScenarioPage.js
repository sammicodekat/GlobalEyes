import React, { Component } from 'react'
import { connect } from 'react-redux'

import ScenarioForm from './CreateScenario/ScenarioForm'
import { createNewScenario } from '../actions/scenariosActions'
import { browserHistory } from 'react-router'
//USER - pull in user data
//Associate userName(firebase) with the scenario

class CreateScenarioPage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      newScenario: {},
      field: '',
      wayPointArr: []
    }
  }
   componentWillReceiveProps(newProps) {
     const { wayPointArr } = this.state
     if (newProps.wayPointId) {
       wayPointArr.push(newProps.wayPointId)
     }
     this.setState({ wayPointArr })
     console.log('wayPointArr', wayPointArr)
     console.log("create scenario", newProps)
   }

  setNewScenario = (e) => {
    let field = e.target.name
    let { newScenario } = this.state
    newScenario[field] = e.target.value
    return this.setState({newScenario,field})
  }

  submitNewScenario = (e) => {
    e.preventDefault()
    const newSce = {}
    const { wayPointArr } = this.state
    newSce.scenarioName = this.state.newScenario.scenarioName
    newSce.waypoints = wayPointArr
    newSce.scenarioAuthor = 'Sammi'
    newSce.vouchers = Math.ceil(wayPointArr.length * 1.5)
    this.props.createNewScenario(newSce)
    this.setState({ newScenario: {}, wayPointArr: [] })
    // browserHistory.push(`${scenario._id}/map`)
  }

  render() {
    const { newScenario } = this.state
    const randomBackground = {
      backgroundImage: `url(/images/background1.jpg)`
    }

    return (
      <div>
        <div className="backgroundImage" style={randomBackground} />
        <div className="pageContent">
          <ScenarioForm
            newScenario={newScenario}
            onChange={this.setNewScenario}
            onClick={this.submitNewScenario}
          />
        </div>
      </div>
    )
  }
}
export default connect(state => ({ wayPointId: state.wayPointId }), dispatch => ({
  createNewScenario(scenario) {
    dispatch(createNewScenario(scenario))
  }
}))(CreateScenarioPage)
