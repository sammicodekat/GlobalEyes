import React, { Component } from 'react'
// import TextInput from './CreateScenario/TextInput'
import ScenarioForm from './ScenarioForm'

//USER - pull in user data
//Associate userName(firebase) with the scenario

export default class CreateScenarioPage extends Component {
  constructor() {
    super()
    this.state = {
      newScenario: {},
      field: ''
    }
  }

  setNewScenario = (e) => {
    console.log(e)
    let field = e.target.name
    let newScenario = this.state.newScenario
    newScenario[field] = e.target.value
    return this.setState({newScenario: newScenario,field})
  }

  submitNewScenario = (e) => {
    e.preventDefault()
    let newScenarioObj = this.state.newScenario
    this.setState({ newScenario: {} })
  }
  select = (suggest) => {
    const { field } = this.state
    let newScenario = this.state.newScenario
    newScenario[field] = suggest.label
    newScenario[`${field}Lat`] = suggest.location.lat
    newScenario[`${field}Lng`] = suggest.location.lng
    return this.setState({newScenario: newScenario})
  }

  render() {
    const { newScenario } = this.state
    console.log('newScenario: ', newScenario)
    const theFormInfo = Object.keys(newScenario) || []

    const randomBackground = {
      backgroundImage: `url(/images/background${Math.floor(Math.random() * 2) + 1}.jpg)`
    }

    return (
      <div>
        <div className="backgroundImage" style={randomBackground} />
        <div className="pageContent">
          <ScenarioForm
            newScenario={this.state.newScenario}
            onChange={this.setNewScenario}
            onClick={this.submitNewScenario}
            onSelect={this.select}
          />
        </div>
      </div>
    )
  }
}
