/* global document */

import React from 'react'
import { connect } from 'react-redux'
import { updateUserObject } from '../actions/auth'
import uuid from 'uuid'

const openNotebook = () => {
  document.getElementById('notebook').className = 'open'
}

const AddToNotebookButton = ( props ) => {
  console.log( 'props' , props )

  function saveClue(e) {
    let updatedUserObj = props.userObj
    console.log( 'updatedUserObj' , updatedUserObj )
    let notHasNote = true
    if(updatedUserObj.notebook.length > 0) {
      updatedUserObj.notebook.forEach(note => {
        if(note.name === props.poiName){
          return notHasNote = false
        }
      })
    }
    if(notHasNote) {
      let note = {
        name: props.poiName,
        waypoint: props.waypointName,
        links: props.clues.links || '',
        text: props.clues.text || '',
        noteId: uuid()
      }
      updatedUserObj['notebook'] = [...updatedUserObj['notebook'], note]
      updateUserObject(updatedUserObj)
      notHasNote = false
    }
    openNotebook()
  }

  return(
    <div className="addClue">
      <button onClick={saveClue}><img src="/images/saveClueBtn.png" alt="save clue" /> <span>Save To Notebook</span></button>
    </div>
  )
}

function mapStateToProps(state){
  return {
    userObj: state.userObj,
  }
}

export default connect(mapStateToProps, null)(AddToNotebookButton)
