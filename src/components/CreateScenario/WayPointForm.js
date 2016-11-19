import React, { Component } from 'react'
import { connect } from 'react-redux'
import Geosuggest from 'react-geosuggest'
import TextInput from './TextInput'
import TextArea from './TextArea'
import PoiForm from './PoiForm'
// import FalseRouteForm from './FalseRouteForm'
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
        <p>Text: {poi.text || 'no text'}</p>
        <p>Clue: {poi.clues ? poi.clues.text : 'no clues'}</p>
      </div>
    ))
  )

  render() {
    const { newWayPoint, poiArr } = this.state
    const { waypointNum, waypointTitle } = this.props

    return (
      <div className="waypointForm">
        <h2>{waypointNum === 0 ? 'Start Location' : waypointTitle}</h2>
        <Geosuggest
          id="waypointLocation"
          type="text"
          onKeyPress={this.setNewWayPoint}
          name="waypointName"
          value={newWayPoint.waypointName}
          onSuggestSelect={this.select}
          placeholder="Enter Location Name"
        />
        <TextArea
          name="text"
          placeholder="Enter Location Description"
          value={newWayPoint.text}
          onChange={this.setNewWayPoint}
        />
        <TextInput
          name="links"
          placeholder="Enter Photo URL"
          value={newWayPoint.links}
          onChange={this.setNewWayPoint}
        />
        <div className="poiFormBlock">
          <h2>Points of Interest</h2>
          {this.renderEnteredPois(poiArr)}
          <PoiForm name="waypointLocation" />
        </div>
        {/* <h2>False Routes</h2>
        <FalseRouteForm /> */}
        {/* <Geosuggest
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
        /> */}
        <button className="btnClass" type="submit" onClick={this.submitNewWayPoint}>Commit WayPoint</button>
      </div>
    )
  }
}
export default connect(state => ({ poiId: state.poiId }), dispatch => ({
  createNewWayPoint(waypoint) {
    dispatch(createNewWayPoint(waypoint))
  }
}))(WayPointForm)
