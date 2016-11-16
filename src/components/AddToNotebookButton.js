import React from 'react'
import { connect } from 'react-redux'

//USER - store the clue on the userObj

const AddToNotebookButton = ( props, poiName, clues ) => {

  function saveClue(e) {
    let updatedGameObj = props.gameObj
    let note = {
      name: props.poiName,
      waypoint: props.clues.waypoint,
      links: props.clues.links || [],
      text: props.clues.text || ''
    }
    updatedGameObj['notebook'] = [...updatedGameObj['notebook'], note]
    // addToNoteBook(note)
  }

  return(
    <div>
      <button onClick={saveClue}>Save To Notebook</button>
    </div>
  )
}

function mapStateToProps(state){
  return {
    gameObj: state.gameObj,
  }
}

export default connect(mapStateToProps, null)(AddToNotebookButton)