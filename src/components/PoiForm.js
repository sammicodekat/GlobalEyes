import React, { Component } from 'react'
import Geosuggest from 'react-geosuggest'
import TextInput from './CreateScenario/TextInput'

export default class PoiForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      poiCount:1
    }
  }

  addPoiInput() {
    let { poiCount } = this.state
    poiCount += 1
    this.setState({ poiCount })
  }

  removePoiInput() {
    let { poiCount } = this.state
    if (poiCount > 0) {
      poiCount -= 1
      this.setState({ poiCount })
    }
  }

  render() {
    const { onChange, newScenario, onClick, onSelect, name } = this.props
    const { poiCount } = this.state
    let poiFields = []
      for (let j = 1; j <= poiCount; j += 1) {
        const poiName = `${name}_pointOfInterest${j}`
        const clueName = `${name}_clue${j}`
        const clueLink = `${name}_link${j}`
        const newPoi = (<div><Geosuggest key={poiName}
          id={poiName}
          type="text"
          onKeyPress={onChange}
          name={poiName}
          value={newScenario[poiName]}
          label={poiName}
          onSuggestSelect={onSelect}
                          placeHolder="Search Point of Interests"/>
          <TextInput
            key={clueName}
            name={clueName}
            label={clueName}
            value={newScenario[clueName]}
            onChange={onChange} />
          <TextInput
            key={clueLink}
            name={clueLink}
            label="Link to Clue Resource"
            value={newScenario[clueLink]}
            onChange={onChange} />
        </div>)
        poiFields = [...poiFields, newPoi]
      }

    return (
        <div>
          {poiFields}
          <button type="button" onClick={() => this.addPoiInput()}>Add Point of Interest</button>
          <button type="button" onClick={() => this.removePoiInput()}>Delete Point of Interest</button>
        </div>
    )
  }
}
