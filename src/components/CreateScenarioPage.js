import React, { Component } from 'react'
// import TextInput from './CreateScenario/TextInput'
import ScenarioForm from './ScenarioForm'

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

    const theScenario = theFormInfo.map((x, i) => (<h3 key={i}>{x}: {newScenario[x]}</h3>))

    return (
      <div>
        {theScenario}

        <ScenarioForm
          newScenario={this.state.newScenario}
          onChange={this.setNewScenario}
          onClick={this.submitNewScenario}
          onSelect={this.select}
        />
      </div>
    )
  }
}
