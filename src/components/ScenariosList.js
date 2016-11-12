import React from 'react'

const renderScenariosList = scenarios => (scenarios.map((scenario, i) => (
    <button key={`${scenario.scenarioId}${i}`} onClick={() => {}}>{scenario.scenarioName}</button>
)))

const ScenariosList = ({ scenarios }) => {
    return (
        <div>
            {renderScenariosList(scenarios)}
        </div>
    )
}

export default ScenariosList
