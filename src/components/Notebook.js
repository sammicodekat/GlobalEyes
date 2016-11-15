import React from 'react'
import NoteList from './NoteList'

const clues = [{waypoint:'hahahah',links:'kakaka',text:'lalallaaal'},{waypoint:'meowmeowmeow',links:'kakaka',text:'lalallaaal'}]

const Notebook = (props) => (
    <div className="notebook">
      <span className="remaining">Notebook</span>
      <NoteList clues={clues} />
    </div>
  )

export default Notebook
