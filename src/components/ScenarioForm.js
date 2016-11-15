import React, { Component } from 'react'

import TextInput from './CreateScenario/TextInput'

export default class ScenarioForm extends Component {
  constructor() {
    super()
    this.state = {
      fieldCount: 1
    }
  }

  addWaypointInput() {
    let { fieldCount } = this.state
    fieldCount += 1
    this.setState({ fieldCount })
  }

  removeWaypointInput() {
    let { fieldCount } = this.state
    if (fieldCount > 0) {
      fieldCount -= 1
      this.setState({ fieldCount })
    }
  }

  render() {
    const { onChange, newScenario, onClick } = this.props
    const { fieldCount } = this.state

    let waypointFields = []

    for (let i = 1; i <= fieldCount; i += 1) {
      const theName = `waypoint${i}`
      const newField = <TextInput key={theName} name={theName} label={theName} value={newScenario[theName]} onChange={onChange} />
      waypointFields = [...waypointFields, newField]
    }

    console.log('waypointFields: ', waypointFields)

    return (
      <form>
        <TextInput
          name="startLocation"
          label="Start Location"
          id="startLocation"
          onChange={onChange}
          value={newScenario.startLocation} />

        {waypointFields.map(field => field)}

        <button type="button" onClick={() => this.addWaypointInput()}>+</button>
        <button type="button" onClick={() => this.removeWaypointInput()}>-</button>

        <TextInput
          name="endLocation"
          label="End Location "
          id="endLocation"
          value={newScenario.endLocation}
          onChange={onChange} />

        <TextInput
          name="pointOfInterest"
          label="Point of Interest"
          value={newScenario.pointOfInterest}
          onChange={onChange} />

        <TextInput
          name="clue"
          label="Clue"
          value={newScenario.clue}
          onChange={onChange} />

        <TextInput
          name="clueLink"
          label="Link to Clue Resource"
          value={newScenario.clueLink}
          onChange={onChange} />

        <button className="btnClass" type="submit" onClick={onClick}>Submit Scenario</button>
      </form>
    )
  }
}
