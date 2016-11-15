import React, { Component } from 'react'
import TextInput  from './createScenario/TextInput'
import ScenarioForm from './ScenarioForm'

//USER - pull in user data 
//Associate userName(firebase) with the scenario

export default class CreateScenarioPage extends Component {
  constructor() {
    super()
    this.state = {
      newScenario: {}
    }
  }

  setNewScenario = (e) => {
    let field = e.target.name
    let newScenario = this.state.newScenario
    newScenario[field] = e.target.value
    return this.setState({newScenario: newScenario})
  }



  submitNewScenario = (e) => {
    e.preventDefault()
    let newScenarioObj = this.state.newScenario
    this.setState({newScenario: {}})
  }

  render() {
    const { newScenario } = this.state
    return (
      <div>
      <h3>Start Location: { newScenario.endLocation}</h3>
      <h3>End Location: {newScenario.startLocation}</h3>
      <h3>Waypoint: {newScenario.waypoint}</h3>
      <h3>Point Of Interest: {newScenario.pointOfInterest}</h3>
      <h3>Clue: {newScenario.clue}</h3>
      <h3>Clue Link: {newScenario.clueLink}</h3>
        <ScenarioForm
          newScenario={this.state.newScenario}
          onChange={this.setNewScenario}
          onClick={this.submitNewScenario}
        />
      </div>
    )
  }
}