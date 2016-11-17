import React, { Component } from 'react'
import { connect } from 'react-redux'
import Geosuggest from 'react-geosuggest'
import TextInput from './TextInput'
import TextArea from './TextArea'
import { createNewPoi } from '../../actions/poiActions'

class PoiForm extends Component {
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
    let newPoi = {}
    let nclues = {}
    nclues.links = newPointOfInterestObj.cluelink
    nclues.text = newPointOfInterestObj.cluetext
    newPoi.poiName = newPointOfInterestObj.poiName
    newPoi.links = newPointOfInterestObj.links
    newPoi.text = newPointOfInterestObj.text
    newPoi.clues = nclues
    this.props.createNewPoi(newPoi)
    this.setState({ newPointOfInterest: {} })
    // browserHistory.push(`${scenario._id}/map`)
  }
  select = (suggest) => {
    const { newPointOfInterest } = this.state
    newPointOfInterest.poiName = suggest.label
    return this.setState({newPointOfInterest: newPointOfInterest})
  }

  render() {
    const { name } = this.props
    const { poiCount, newPointOfInterest  } = this.state
    let poiFields = []
    const deleteButton = poiCount ? (<button type="button" onClick={() => this.removePoiInput()}>Delete Point of Interest</button>) : ''
      for (let j = 1; j <= poiCount; j += 1) {
        const pName =`${name}_pointOfInterest${j}`
        const pLabel = `${name} PointOfInterest${j}`
        const link = `${name}_pointOfInterest${j}_link`
        const text = `${name}_pointOfInterest${j}_text`
        const clink = `${name}_pointOfInterest${j}_clue_link`
        const ctext = `${name}_pointOfInterest${j}_clue_text`
        const newPoi = (<div key={j} className="poiForm">
          <Geosuggest
            key={pName}
            id={pName}
            type="text"
            onKeyPress={this.setNewPoi}
            name={pName}
            value={newPointOfInterest.poiName}
            placeholder="Enter Point of Interest"
            onSuggestSelect={this.select}
          />
          <TextArea
            key={text}
            name="text"
            placeholder="Point of Interest Description"
            value={newPointOfInterest.text}
            onChange={this.setNewPoi}
          />
          <TextInput
            key={link}
            name="links"
            placeholder="Enter Photo URL"
            value={newPointOfInterest.links}
            onChange={this.setNewPoi}
          />
          <h3>Clue</h3>
          <TextInput
            key={ctext}
            name="cluetext"
            placeholder={ctext}
            value={newPointOfInterest.cluetext}
            onChange={this.setNewPoi}
          />
          <TextInput
            key={clink}
            name="cluelink"
            placeholder={clink}
            value={newPointOfInterest.cluelink}
            onChange={this.setNewPoi}
          />
          <button className="btnClass" type="submit" onClick={this.submitNewPoi}>save point of interest</button>
        </div>)
        poiFields = [...poiFields, newPoi]
      }

    return (
        <div >
          {poiFields}
          <button className="addWaypointBtn" type="button" onClick={() => this.addPoiInput()}><span>+</span>add point of interest</button>
          {deleteButton}
        </div>
    )
  }
}
export default connect(state => ({ scenarios: state.scenarios }), dispatch => ({
  createNewPoi(newPoi) {
    dispatch(createNewPoi(newPoi))
  }
}))(PoiForm)
