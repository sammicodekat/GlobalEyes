import React from 'react'
import NoteList from './NoteList'

const clues = [{waypoint:'hahahah',links:['http://i.imgur.com/tffVyEo.jpg'],text:'lalallaaal'},{waypoint:'meowmeowmeow',links:['http://i.imgur.com/tffVyEo.jpg'],text:'lalallaaal'}]

const Notebook = (props) => (
    <div className="notebook">
      <span className="remaining">Notebook</span>
      <NoteList clues={clues} />
    </div>
  )

export default Notebook
