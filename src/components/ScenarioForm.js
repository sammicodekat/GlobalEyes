import React, { Component } from 'react'
import Geosuggest from 'react-geosuggest'
import PoiForm from './PoiForm'

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
    const { onChange, newScenario, onClick, onSelect, getLabel } = this.props
    const { fieldCount, poiCount } = this.state
    let waypointFields = []
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


    return (
      <form className="creationForm">
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
        <button className="btnClass" type="submit" onClick={onClick}>Submit Scenario</button>
      </form>
    )
  }
}
