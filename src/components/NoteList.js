import React from 'react'

const renderNoteList = clues => (clues.map((clue,i) => (
  <div key={i}>
    <h3>{clue.waypoint}</h3>
    <h4>{clue.poiName}</h4>
    {clue.links.map(link => <img key={`cluelink${i}`} src={clue.links} />)}
    <p>{clue.text}</p>
  </div>
)))

const NoteList = ({ clues }) => (
  <div>
    {renderNoteList( clues || [])}
  </div>
)

export default NoteList
