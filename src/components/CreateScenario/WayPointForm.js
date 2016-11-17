import React, { Component } from 'react'
import { connect } from 'react-redux'
import Geosuggest from 'react-geosuggest'
import TextInput from './TextInput'
import TextArea from './TextArea'
import PoiForm from './PoiForm'
import { createNewWayPoint } from '../../actions/wayPointsActions'

class WayPointForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      poiArr: [],
      newWayPoint: {},
      field: ''
    }
  }
  componentWillReceiveProps(newProps) {
    const { poiArr } = this.state
    if (newProps.poiId) {
      poiArr.push(newProps.poiId)
    }
    this.setState({ poiArr })
  }

  setNewWayPoint = (e) => {
    const field = e.target.name
    const { newWayPoint } = this.state
    newWayPoint[field] = e.target.value
    return this.setState({ newWayPoint, field })
  }

  submitNewWayPoint = (e) => {
    e.preventDefault()
    const { newWayPoint, poiArr } = this.state
    const newWP = {}
    const falseroutes = []
    falseroutes.push(newWayPoint.falseRoute1)
    falseroutes.push(newWayPoint.falseRoute2)
    const coords = { lat: newWayPoint.lat, lng: newWayPoint.lng }
    newWP.waypointName = newWayPoint.waypointName
    newWP.links = newWayPoint.links
    newWP.text = newWayPoint.text
    newWP.coords = coords
    newWP.pointsOfInterest = poiArr
    newWP.falseRoute = falseroutes
    this.props.createNewWayPoint(newWP)
    this.setState({ newPointOfInterest: {}, poiArr: [] })
  }

  select = (suggest) => {
    const { newWayPoint } = this.state
    newWayPoint.waypointName = suggest.label
    newWayPoint.lat = suggest.location.lat
    newWayPoint.lng = suggest.location.lng
    return this.setState({ newWayPoint })
  }

  selectF = (suggest) => {
    const { newWayPoint, field } = this.state
    const falseRoute = { name: suggest.label,
      lat: suggest.location.lat,
      lng: suggest.location.lng }
    newWayPoint[field] = falseRoute
    return this.setState({ newWayPoint })
  }

  renderEnteredPois = (poiArr) => (
    poiArr.map((poi, i) => (
      <div key={`enteredPoi${i}`} className="enteredPoi">
        <h4>{poi.poiName}</h4>
        <p>{`${poi.text.substring(0, 60)}...`}</p>
        <p>{poi.clues ? 'Clue: Yes' : 'Clue: No'}</p>
      </div>
    ))
  )

  render() {
    const { newWayPoint, poiArr } = this.state
    const { waypointCount, poiId } = this.props
    let waypointFields = []
    console.log('poiArr: ', poiArr)
    for (let i = 1; i <= waypointCount; i += 1) {
      const theName = `waypoint${i}`
      const text = `waypoint$${i}text`
      const link = `waypoint$${i}link`

      const newField = (
        <div className="waypointForm">
          <h2>WayPoint</h2>
          <Geosuggest
            id={theName}
            type="text"
            onKeyPress={this.setNewWayPoint}
            name="waypointName"
            value={newWayPoint.waypointName}
            onSuggestSelect={this.select}
            placeholder="Search Waypoint"
          />
          <TextArea
            key={text}
            name="text"
            label={text}
            value={newWayPoint.text}
            onChange={this.setNewWayPoint}
          />
          <TextInput
            key={link}
            name="links"
            label={link}
            value={newWayPoint.links}
            onChange={this.setNewWayPoint}
          />
          <h2>False Route</h2>
          <Geosuggest
            type="text"
            onKeyPress={this.setNewWayPoint}
            name="falseRoute1"
            value={newWayPoint.falseRoute1}
            label="False Route 1"
            onSuggestSelect={this.selectF}
            placeHolder="Search False Point"
          />
          <Geosuggest
            type="text"
            onKeyPress={this.setNewWayPoint}
            name="falseRoute2"
            value={newWayPoint.falseRoute2}
            label="False Route 2"
            onSuggestSelect={this.selectF}
            placeHolder="Search False Point"
          />
          <PoiForm key={`PoiForm${i}`} name={theName} />
        </div>)
      waypointFields = [...waypointFields, newField]
    }

    return (
      <div>
        <div className="waypointForm">
          <h2>Start Location</h2>
          <Geosuggest
            id="startLocation"
            type="text"
            onKeyPress={this.setNewWayPoint}
            name="waypointName"
            value={newWayPoint.waypointName}
            onSuggestSelect={this.select}
            placeholder="Enter Start Location"
          />
          <TextArea
            name="text"
            placeholder="Start Location Description"
            value={newWayPoint.text}
            onChange={this.setNewWayPoint}
          />
          <TextInput
            name="links"
            placeholder="Enter Photo URL"
            value={newWayPoint.links}
            onChange={this.setNewWayPoint}
          />
          <h2>Points of Interest</h2>
          {this.renderEnteredPois(poiArr)}
          <PoiForm name="startLocation" />
          <h2>False Routes</h2>
          <Geosuggest
            type="text"
            onKeyPress={this.setNewWayPoint}
            name="falseRoute1"
            value={newWayPoint.falseRoute1}
            onSuggestSelect={this.selectF}
            placeHolder="Enter False Waypoint"
          />
          <Geosuggest
            type="text"
            onKeyPress={this.setNewWayPoint}
            name="falseRoute2"
            value={newWayPoint.falseRoute2}
            onSuggestSelect={this.selectF}
            placeHolder="Enter False Waypoint"
          />
          <button className="addWaypointBtn" type="button" onClick={() => this.addWaypointInput()}><span>+</span>Add WayPoint</button>
        </div>
        {waypointFields}
        <button className="btnClass" type="submit" onClick={this.submitNewWayPoint}>Confirm WayPoint</button>
      </div>
    )
  }
}
export default connect(state => ({ poiId: state.poiId }), dispatch => ({
  createNewWayPoint(waypoint) {
    dispatch(createNewWayPoint(waypoint))
  }
}))(WayPointForm)
