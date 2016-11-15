import React, { Component } from 'react'
import Geosuggest from 'react-geosuggest'
import PoiForm from './PoiForm'
import TextInput from './CreateScenario/TextInput'

export default class ScenarioForm extends Component {
  constructor() {
    super()
    this.state = {
      fieldCount: 1,
      falseRouteCount: 1
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

  addFalseRoute() {
    let { falseRouteCount } = this.state
    falseRouteCount += 1
    this.setState({ falseRouteCount })
  }

  removeFalseRoute() {
    let { falseRouteCount } = this.state
    if (falseRouteCount > 0) {
      falseRouteCount -= 1
      this.setState({ falseRouteCount })
    }
  }

  render() {
    const { onChange, newScenario, onClick, onSelect, getLabel } = this.props
    const { fieldCount, falseRouteCount } = this.state
    let waypointFields = []
    let falseRouteFields = []
    for (let i = 1; i <= fieldCount; i += 1) {
      const theName = `waypoint${i}`
      const newField = (
        <div key={`${theName}${i}`}><Geosuggest
          id={theName}
          type="text"
          onKeyPress={onChange}
          name={theName}
          value={newScenario[theName]}
          // label={theName}
          onSuggestSelect={onSelect}
          getSuggestLabel={getLabel}
          placeholder="Search Waypoint"
                                    />
          <PoiForm key={`PoiForm${i}`} onChange={onChange} newScenario={newScenario} onClick={onClick} onSelect={onSelect} name={theName} />
        </div>)
      waypointFields = [...waypointFields, newField]
    }
    for (let j = 1; j <= falseRouteCount; j += 1) {
      const routeName = `falseRoute${j}`
      const newFalseRoute = (
        <Geosuggest
          key={routeName}
          id={routeName}
          type="text"
          onKeyPress={onChange}
          name={routeName}
          value={newScenario[routeName]}
          // label={theName}
          onSuggestSelect={onSelect}
          placeholder="Add False Route"
        />)
      falseRouteFields = [...falseRouteFields, newFalseRoute]
    }


    return (
      <form className="creationForm">
        <TextInput id="scenarioName" name="scenarioName" value={newScenario.scenarioName} onChange={onChange} type="text" label="Scenario Name" />

          <Geosuggest
            id='startLocation'
            type="text"
            onKeyPress={onChange}
            name="startLocation"
            value={newScenario.startLocation}
            // label="Start Location"
            onSuggestSelect={onSelect}
            getSuggestLabel={getLabel}
            placeholder="Search Start Location"
        />
        <PoiForm onChange={onChange} newScenario={newScenario} onClick={onClick} onSelect={onSelect} name='startLocation'/>
        {waypointFields}
        <Geosuggest
          id='endLocation'
          type="text"
          onKeyPress={onChange}
          name="endLocation"
          value={newScenario.endLocation}
          // label="End Location"
          onSuggestSelect={onSelect}
          getSuggestLabel={getLabel}
          placeholder="Search End Location"
        />
        <PoiForm onChange={onChange} newScenario={newScenario} onClick={onClick} onSelect={onSelect} name='endLocation'/>
        <button type="button" onClick={() => this.addWaypointInput()}>Add WayPoint</button>
        <button type="button" onClick={() => this.removeWaypointInput()}>Delete WayPoint</button>
        {falseRouteFields}
        <button type="button" onClick={() => this.addFalseRoute()}>Add False Route</button>
        <button type="button" onClick={() => this.removeFalseRoute()}>Delete False Route</button>
        <button className="btnClass" type="submit" onClick={onClick}>Submit Scenario</button>
      </form>
    )
  }
}
