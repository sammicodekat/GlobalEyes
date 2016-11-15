import React from 'react'
import Notebook from './Notebook'

const Game = (props) => (
  <div>
    {props.children}
    <div id="notebook">
      <Notebook />
    </div>
  </div>
  )
export default Game
