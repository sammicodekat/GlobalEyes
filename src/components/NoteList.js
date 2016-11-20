import React from 'react'
import { connect } from 'react-redux'

const NoteList = ( props ) => {
  let clueDisplay
  if(!props.userObj.notebook.note){
    clueDisplay = props.userObj.notebook.map((clue, i) => {
      return (
        <div key={`${clue.waypoint}+${i}`} className="notebookEntry">
          <span className="foundIn">Clues found in</span>
          <h2>{clue.waypoint}</h2>
          <div className="notebookClue">
            <h4>{clue.name}</h4>
            <span className="clueLink"><img src={clue.links} /></span>
            <p>{clue.text}</p>
          </div>
        </div>
      )
    })
  } else {
    clueDisplay = <div className="notebookEntry"><h2>{props.userObj.notebook.note}</h2></div>
  }
  return (
    <div>
      {clueDisplay}
    </div>
  )
}

function mapStateToProps(state){
  return {
    userObj: state.userObj
  }
}

export default connect(mapStateToProps, null)(NoteList)
