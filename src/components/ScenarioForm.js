import React from 'react'
import TextInput from './CreateScenario/TextInput'

const ScenarioForm = ( { onChange, newScenario, onClick } ) => {
  return(
    <form>
      <TextInput
        name="startLocation"
        label="Start Location"
        id="startLocation"
        onChange={onChange}
        value={newScenario.startLocation}/>
       
      <TextInput
        name="endLocation"
        label="End Location "
        id="endLocation"
        value={newScenario.endLocation}
        onChange={onChange}/>

      <TextInput
        name="waypoint"
        label="Waypoint"
        value={newScenario.waypoint}
        onChange={onChange}/>

       <TextInput
        name="pointOfInterest"
        label="Point of Interest"
        value={newScenario.pointOfInterest}
        onChange={onChange}/>

       <TextInput
        name="clue"
        label="Clue"
        value={newScenario.clue}
        onChange={onChange}/>

      <TextInput
        name="clueLink"
        label="Link to Clue Resource"
        value={newScenario.clueLink}
        onChange={onChange}/>

      <button 
        className='btnClass'
        onClick={onClick}>Submit Scenario</button>
    </form>
  )
}

export default ScenarioForm

