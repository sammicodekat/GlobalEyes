import React, { Component } from 'react'
// import TextInput from './CreateScenario/TextInput'
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
    this.setState({ newScenario: {} })
  }

  render() {
    const { newScenario } = this.state
    console.log('newScenario: ', newScenario)

    const theFormInfo = Object.keys(newScenario) || []

    const theScenario = theFormInfo.map((x, i) => (<h3 key={i}>{x}: {newScenario[x]}</h3>))

    return (
      <div>
        {theScenario}

        <ScenarioForm
          newScenario={this.state.newScenario}
          onChange={this.setNewScenario}
          onClick={this.submitNewScenario}
        />
      </div>
    )
  }
}
