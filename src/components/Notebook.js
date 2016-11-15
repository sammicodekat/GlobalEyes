/* global document */
import React from 'react'
import NoteList from './NoteList'

const clues = [{ waypoint: 'hahahah', poiName: 'An Interesting Point', links: ['http://i.imgur.com/tffVyEo.jpg'], text: 'lalallaaal' }, { waypoint: 'meowmeowmeow', poiName: 'An Interesting Point', links: ['http://i.imgur.com/tffVyEo.jpg'], text: 'lalallaaal' }]

const closeNotebook = () => {
  document.getElementById('notebook').className = ''
}

const Notebook = (props) => (
  <div id="notebook">
    <div className="notebookHeader">
      <h2>Notebook</h2>
      <button className="closeButton" onClick={() => closeNotebook()}>X</button>
    </div>
    <NoteList clues={clues} />
  </div>
  )

export default Notebook
