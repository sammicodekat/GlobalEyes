import React from 'react'
import { browserHistory } from 'react-router'

const renderScenariosList = (scenarios, setVouchers) => (scenarios.map(scenario => (
  <button key={scenario._id} onClick={() => { browserHistory.push(`/${scenario._id}`), setVouchers(scenario.vouchers)} }>{scenario.scenarioName}</button>
)))

const ScenariosList = ({ scenarios, setVouchers }) => (
  <div>
    {renderScenariosList(scenarios || [], setVouchers)}
  </div>
)

export default ScenariosList
