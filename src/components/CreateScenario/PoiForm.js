import React, { Component } from 'react'
import Geosuggest from 'react-geosuggest'
import TextInput from './TextInput'
import ClueLinkForm from './ClueLinkForm'
import ClueForm from './ClueForm'

export default class PoiForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      poiCount: 0,
      newPointOfInterest: {},
      field: ''
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

  setNewPoi = (e) => {
    let field = e.target.name
    let newPointOfInterest = this.state.newPointOfInterest
    newPointOfInterest[field] = e.target.value
    return this.setState({newPointOfInterest: newPointOfInterest,field})
  }

  submitNewPoi = (e) => {
    e.preventDefault()
    let newPointOfInterestObj = this.state.newPointOfInterest
    console.log('newObj',newPointOfInterestObj)
    // this.props.createNewScenario(scenario)
    // this.setState({ newPointOfInterest: {} })
    // browserHistory.push(`${scenario._id}/map`)
  }
  select = (suggest) => {
    let { newPointOfInterest, field } = this.state
    newPointOfInterest.poiName = suggest.label
    return this.setState({newPointOfInterest: newPointOfInterest})
  }

  render() {
    const { name } = this.props
    const { poiCount, newPointOfInterest  } = this.state
    let poiFields = []
    const deleteButton = poiCount ? (<button type="button" onClick={() => this.removePoiInput()}>Delete Point of Interest</button>) : ''
      for (let j = 1; j <= poiCount; j += 1) {
        const poiName = `${name}_pointOfInterest${j}`
        const clueName = `${name}_clue${j}`
        const clueLink = `${name}_clue${j}_link`
        const newPoi = (<div key={j} className='poiForm'><Geosuggest key={poiName}
          id={poiName}
          type="text"
          onKeyPress={onChange}
          name={poiName}
          value={newPointOfInterest[poiName]}
          label={poiName}
          onSuggestSelect={onSelect}
                          placeHolder="Search Point of Interests"/>
          <TextInput
            key=
            name={clueName}
            label={clueName}
            value={newPointOfInterest[clueName]}
            onChange={onChange} />
          <ClueLinkForm clueLink={clueLink} newPointOfInterest={newPointOfInterest} onChange={onChange} />
          <ClueForm {...this.props} />
        </div>)
        poiFields = [...poiFields, newPoi]
      }

    return (
        <div >
          {poiFields}
          <button type="button" onClick={() => this.addPoiInput()}>Add Point of Interest</button>
          {deleteButton}
          <button className="btnClass" type="submit" onClick={onClick}>Confirm Point Of Interest</button>
        </div>
    )
  }
}
