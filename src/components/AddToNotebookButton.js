import React from 'react'
import { connect } from 'react-redux'
import { updateUserObject } from '../actions/auth'

//USER - store the clue on the userObj

const AddToNotebookButton = ( props, poiName, clues ) => {

  function saveClue(e) {
    let updatedUserObj = props.userObj
    let note = {
      name: props.poiName,
      waypoint: props.clues.waypoint,
      links: props.clues.links[0] || '',
      text: props.clues.text || ''
    }
    updatedUserObj['notebook'] = [...updatedUserObj['notebook'], note]
    updateUserObject(updatedUserObj)
  }

  return(
    <div>
      <button onClick={saveClue}>Save To Notebook</button>
    </div>
  )
}

function mapStateToProps(state){
  return {
    userObj: state.userObj,
  }
}

export default connect(mapStateToProps, null)(AddToNotebookButton)