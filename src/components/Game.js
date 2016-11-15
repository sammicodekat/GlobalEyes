import React from 'react'
import Notebook from './Notebook'

const Game = (props) => (
  <div>
    {props.children}
    <div className="notebook">
      <Notebook />
    </div>
  </div>
  )
export default Game
