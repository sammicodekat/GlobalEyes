import React from 'react'
import { connect } from 'react-redux'
//delete to here


// const renderNoteList = (props, clues.map((clue,i) => (
//   <div key={i} className="notebookEntry">
//     <span className="foundIn">Found in</span>
//     <h2>{clue.waypoint}</h2>
//     <div className="notebookClue">
//       <h4>{clue.poiName}</h4>
//       {clue.links.map(link => <span key={`clueLink${i}`} className="clueLink"><img key={`cluelink${i}`} src={clue.links} /></span>)}
//       <p>{clue.text}</p>
//     </div>
//   </div>
// )))




const NoteList = ( props ) => {
  console.log('in NoteList', props.gameObj.notebook)
  let clueDisplay
  if(props.gameObj.notebook[0]){
    console.log(props.gameObj.notebook)
    clueDisplay = props.gameObj.notebook.map((clue, i) => {
      return (
        <div key={`${clue.waypoint}+${i}`} className="notebookEntry">
          <span className="foundIn">Found in</span>
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
    clueDisplay = <div className="notebookEntry"><h2>{props.gameObj.notebook.note}</h2></div>
  }
  return (
    <div>
      {clueDisplay} 
    </div>
  )
}

function mapStateToProps(state){
  return {
    gameObj: state.gameObj
  }
}

export default connect(mapStateToProps, null)(NoteList)
