import React, { Component } from 'react'
import TextInput from './TextInput'
import WayPointForm from './WayPointForm'


export default class ScenarioForm extends Component {
  constructor() {
    super()
    this.state = {
      waypointCount: 0
    }
  }

  addWaypointInput() {
    let { waypointCount } = this.state
    waypointCount += 1
    this.setState({ waypointCount })
  }

  removeWaypointInput() {
    let { waypointCount } = this.state
    if (waypointCount > 0) {
      waypointCount -= 1
      this.setState({ waypointCount })
    }
  }

  render() {
    const { onChange, newScenario, onClick } = this.props
    const { waypointCount } = this.state
    // const deleteButton = waypointCount ? (<button type="button" onClick={() => this.removeWaypointInput()}>Delete WayPoint</button>) : ''
    return (
      <form className="creationForm">
        <TextInput id="scenarioName" name="scenarioName" value={newScenario.scenarioName} onChange={onChange} type="text" placeholder="Scenario Name" />
        {/* {deleteButton} */}
        <WayPointForm {...this.props} waypointCount={waypointCount} />
        <button className="btnClass" type="submit" onClick={onClick}>Submit Scenario</button>
      </form>
    )
  }
}
