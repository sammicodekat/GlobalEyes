/* global document */
import React from 'react'
import NoteList from './NoteList'

const clues = [{ waypoint: 'hahahah', poiName: 'Interesting Place', links: ['http://i.imgur.com/tffVyEo.jpg'], text: 'lalallaaal' }, { waypoint: 'meowmeowmeow', poiName: 'Interesting Place', links: ['http://i.imgur.com/tffVyEo.jpg'], text: 'lalallaaal' }]

const closeNotebook = () => {
  document.getElementById('notebook').className = ''
}

const Notebook = (props) => (
  <div id="notebook">
    <div className="notebookHeader">
      <h1>Notebook</h1>
      <button className="closeButton" onClick={() => closeNotebook()}>X</button>
    </div>
    <NoteList clues={clues} />
  </div>
  )

export default Notebook


