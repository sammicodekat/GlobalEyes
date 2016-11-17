import React from 'react'
import { browserHistory } from 'react-router'

const renderScenariosList = scenarios => (scenarios.map(scenario => (
  <button key={scenario._id} onClick={() => browserHistory.push(`/${scenario._id}`)}>{scenario.scenarioName}</button>
)))

const ScenariosList = ({ scenarios }) => (
  <div>
    {renderScenariosList(scenarios || [])}
  </div>
)

export default ScenariosList
