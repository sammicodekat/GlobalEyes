import React from 'react'

const renderNoteList = clues => (clues.map((clue,i) => (
  <div key={i} className="notebookEntry">
    <span className="foundIn">Found in</span>
    <h3>{clue.waypoint}</h3>
    <div className="notebookClue">
      <h5>{clue.poiName}</h5>
      {clue.links.map(link => <span className="clueLink"><img key={`cluelink${i}`} src={clue.links} /></span>)}
      <p>{clue.text}</p>
    </div>
  </div>
)))

const NoteList = ({ clues }) => (
  <div>
    {renderNoteList( clues || [])}
  </div>
)

export default NoteList
