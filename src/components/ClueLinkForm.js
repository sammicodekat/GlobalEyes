import React, { Component } from 'react'
import TextInput from './CreateScenario/TextInput'

export default class ClueLinkForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      linkCount: 1
    }
  }

  addLinkInput() {
    let { linkCount } = this.state
    linkCount += 1
    this.setState({ linkCount })
  }

  removeLinkInput() {
    let { linkCount } = this.state
    if (linkCount > 0) {
      linkCount -= 1
      this.setState({ linkCount })
    }
  }

  render() {
    const { onChange, newScenario, clueLink } = this.props
    const { linkCount } = this.state
    let linkFields = []
    for (let j = 1; j <= linkCount; j += 1) {
      const name = `${clueLink}${j}`
      const newLink = (<TextInput key={name} name={name} label="Link to Clue Resource" value={newScenario[name]} onChange={onChange} />)
      linkFields = [
        ...linkFields,
        newLink
      ]
    }

    return (
      <div>
        {linkFields}
        <button type="button" onClick={() => this.addLinkInput()}>Add Link</button>
        <button type="button" onClick={() => this.removeLinkInput()}>Delete Link</button>
      </div>
    )
  }
}
