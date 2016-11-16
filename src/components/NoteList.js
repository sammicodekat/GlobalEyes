import React from 'react'

const renderNoteList = clues => (clues.map((clue,i) => (
  <div key={i} className="notebookEntry">
    <span className="foundIn">Found in</span>
    <h2>{clue.waypoint}</h2>
    <div className="notebookClue">
      <h4>{clue.poiName}</h4>
      {clue.links.map(link => <span key={`clueLink${i}`} className="clueLink"><img key={`cluelink${i}`} src={clue.links} /></span>)}
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
