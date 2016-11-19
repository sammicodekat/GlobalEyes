import React, { Component } from 'react'
import TextInput from './TextInput'
import WayPointForm from './WayPointForm'


export default class ScenarioForm extends Component {
  constructor() {
    super()
    this.state = {
      waypointCount: 1,
      currTab: 0
    }
  }

  addWaypointInput() {
    let { waypointCount, currTab } = this.state
    waypointCount += 1
    currTab += 1
    this.setState({ waypointCount, currTab })
  }

  removeWaypointInput() {
    let { waypointCount } = this.state
    if (waypointCount > 1) {
      waypointCount -= 1
      this.setState({ waypointCount })
    }
  }

  switchTab(tabIndex) {
    let { currTab } = this.state
    currTab = tabIndex
    this.setState({ currTab })
  }

  render() {
    const { onChange, newScenario, onClick } = this.props
    const { waypointCount, currTab } = this.state
    // const deleteButton = waypointCount ? (<button type="button" onClick={() => this.removeWaypointInput()}>Delete WayPoint</button>) : ''
    let waypointForms = []
    let tabControls = []

    for (let i = 0; i < waypointCount; i += 1) {
      const visiblePane = 'pane visiblePane'
      const waypointTitle = `Waypoint ${i}`
      const newForm = (
        <div key={`WayPointForm${i}`} className={(i === currTab) ? visiblePane : 'pane hiddenPane'}>
          <WayPointForm {...this.props} waypointCount={waypointCount} waypointNum={i} waypointTitle={waypointTitle} />
        </div>
      )
      const newTab = (
        <li key={`WayPointTab${i}`}>
          <button type="button" className={i === 0 ? 'tabBtn startLocBtn' : 'tabBtn waypointLocBtn'} onClick={() => this.switchTab(i)}>
            {i === 0 ? 'Start Location' : waypointTitle}
          </button>
        </li>
      )
      waypointForms = [...waypointForms, newForm]
      // waypointForms = [...waypointForms, newForm]
      tabControls = [...tabControls, newTab]
    }

    return (
      <form className="creationForm">
        <TextInput id="scenarioName" name="scenarioName" value={newScenario.scenarioName} onChange={onChange} type="text" placeholder="Enter Scenario Name" />
        {/* {deleteButton} */}
        <ul className="tabControls">
          {tabControls}
        </ul>
        <div className="formPanes">
          {waypointForms}
        </div>
        <div className="formControls">
          <button className="addWaypointBtn" type="button" onClick={() => this.addWaypointInput()}><span>+</span>Add Waypoint</button>
          <button className="btnClass" type="submit" onClick={onClick}>Submit Scenario</button>
        </div>
      </form>
    )
  }
}
