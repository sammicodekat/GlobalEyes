import React from 'react'
import Notebook from './Notebook'

const Game = (props) => (
  <div>
    {props.children}
    <Notebook />
  </div>
  )
export default Game
