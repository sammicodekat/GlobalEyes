import React from 'react'

const renderScenariosList = scenarios => (scenarios.map(scenario => (
    <button key={scenarioId} onClick={() => {}}>{scenario.scenarioName}</button>
)))

export default const ScenariosList = (scenarios) => {
    return (
        <div>
            {renderScenariosList(scenarios)}
        </div>
    )
}
