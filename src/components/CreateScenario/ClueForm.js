import React, { Component } from 'react'
import Geosuggest from 'react-geosuggest'
import TextInput from './TextInput'
import ClueLinkForm from './ClueLinkForm'

export default class ClueForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      clueCount:0
    }
  }

  addClueInput() {
    let { clueCount } = this.state
    clueCount += 1
    this.setState({ clueCount })
  }

  removeClueInput() {
    let { clueCount } = this.state
    if (clueCount > 0) {
      clueCount -= 1
      this.setState({ clueCount })
    }
  }

  render() {
    const { onChange, newScenario, onClick, onSelect, name } = this.props
    const { clueCount } = this.state
    let clueFields = []
    const deleteButton = clueCount ? (<button type="button" onClick={() => this.removeClueInput()}>Delete Clue</button>) : ''
      for (let j = 1; j <= clueCount; j += 1) {
        const clueName = `${name}_clue${j}`
        const clueLink = `${name}_clue${j}_link`
        const newClue = (<div key={j} className='clueForm'>
          <TextInput
            key={clueName}
            name={clueName}
            label={clueName}
            value={newScenario[clueName]}
            onChange={onChange} />
          <ClueLinkForm clueLink={clueLink} newScenario={newScenario} onChange={onChange} />
        </div>)
        clueFields = [...clueFields, newClue]
      }

    return (
        <div >
          {clueFields}
          <button type="button" onClick={() => this.addClueInput()}>Add New Clue</button>
          {deleteButton}
        </div>
    )
  }
}
