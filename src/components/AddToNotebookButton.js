import React from 'react'

//USER - store the clue on the userObj

const AddToNotebookButton = ( { clues, poiName } ) => {

  function saveClue(event) {
    let note = {
      name: poiName,
      waypoint: clues.waypoint,
      links: clues.links || [],
      text: clues.text || ''
    }
    console.log('I am note', note)
    //Store in Firebase
  }

  return(
    <div>
      <button onClick={saveClue}>Save To Notebook</button>
    </div>
  )
}

export default AddToNotebookButton