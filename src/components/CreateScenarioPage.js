import React, { Component } from 'react'
// import TextInput from './CreateScenario/TextInput'
import ScenarioForm from './ScenarioForm'
import { connect } from 'react-redux'
import { createNewScenario } from '../actions/scenariosActions'
import { browserHistory } from 'react-router'
//USER - pull in user data
//Associate userName(firebase) with the scenario

class CreateScenarioPage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      newScenario: {},
      field: ''
    }
  }

  setNewScenario = (e) => {
    let field = e.target.name
    let newScenario = this.state.newScenario
    newScenario[field] = e.target.value
    return this.setState({newScenario: newScenario,field})
  }

  submitNewScenario = (e) => {
    e.preventDefault()
    let newScenarioObj = this.state.newScenario
    console.log('newObj',newScenarioObj)
    // this.props.createNewScenario(scenario)
    // this.setState({ newScenario: {} })
    // browserHistory.push(`${scenario._id}/map`)
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
export default connect(state => ({ scenarios: state.scenarios }), dispatch => ({
  createNewScenario(scenario) {
    dispatch(createNewScenario(scenario))
  }
}))(CreateScenarioPage)
