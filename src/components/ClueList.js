import React from 'react'

const renderClueList = clues => (clues.map((clue,i) => (
  <div key={i}>
    <h3>{clue.waypoint}</h3>
    <h4>{clue.poiName}</h4>
    <img src={clue.links[0]} />
    <img src={clue.links[1]} />
    <p>{clue.text}</p>
    <button>Add to Notebook</button>
  </div>
)))

const ClueList = ({ clues }) => (
  <div>
    {renderClueList( clues || [])}
  </div>
)

export default ClueList
