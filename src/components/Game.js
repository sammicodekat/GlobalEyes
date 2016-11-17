import React from 'react'
import Notebook from './Notebook'

// let openClass = 'closed'
//
// const toggleNotebook = () => {
//   let navBar = document.getElementById('navBar')
//   if (navBar.className === 'open') navBar.className = 'closed'
//   else navBar.className = 'open'
//
//   let navBtn = document.getElementById('navBtn')
//   if (navBtn.className === 'open') navBtn.className = 'closed'
//   else navBtn.className = 'open'
// }

// const openNotebook = () => {
//   document.getElementById('notebook').className = 'open'
// }

const Game = (props) => (
  <div>
    {props.children}
    {/* <button className="notebookBtn" onClick={() => openNotebook()}><img src="/images/notebookBtn.png" alt="" /></button> */}
    {/* <div id="notebookBtn" className={elClass} onClick={toggleNotebook}>
      <span />
      <span />
      <span />
      <span />
    </div> */}
    <Notebook />
  </div>
  )
export default Game


