import React from 'react'

const renderClueList = clues => (
  <div className="clueList">
    <h3>A clue perhaps?</h3>
    <img src={clues.links} />
    <p>{clues.text}</p>
  </div>
)

const ClueList = ({ clues }) => (
    renderClueList(clues || [])
)

export default ClueList
