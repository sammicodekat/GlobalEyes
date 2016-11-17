import React, { Component } from 'react'
import { connect } from 'react-redux'
import Geosuggest from 'react-geosuggest'
import TextInput from './TextInput'
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
    let newWP = {}
    let falseroutes = []
    falseroutes.push(newWayPoint.falseRoute1)
    falseroutes.push(newWayPoint.falseRoute2)
    let coords = {lat: newWayPoint.lat,lng:newWayPoint.lng}
    newWP.waypointName = newWayPoint.waypointName
    newWP.links = newWayPoint.links
    newWP.text = newWayPoint.text
    newWP.coords = coords
    newWP.pointsOfInterest = poiArr
    newWP.falseRoute = falseroutes
    this.props.createNewWayPoint(newWP)
    this.setState({ newPointOfInterest: {}, poiArr: [] })
    // browserHistory.push(`${scenario._id}/map`)
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

  render() {
    const { newWayPoint } = this.state
    const { poiId, waypointCount } = this.props
    let waypointFields = []
    for (let i = 1; i <= waypointCount; i ++ ) {
      const Label = i === 1? `Start Location` : `Way Point ${i}`
      const theName = `${Label}${i}`
      const text = `${Label}${i}text`
      const link = `${Label}${i}link`
      const storeName =`waypoint_${i}_waypointName`
      const newField = (
        <div key={`${theName}${i}`} className='waypointForm'>
          <h3>{Label}</h3>
          <Geosuggest
            id={theName}
            type="text"
            onKeyPress={this.setNewWayPoint}
            name='waypointName'
            value={newWayPoint.waypointName}
            onSuggestSelect={this.select}
            placeholder="Search Waypoint"
          />
          <TextInput
            key={text}
            name='text'
            label={text}
            value={newWayPoint.text}
            onChange={this.setNewWayPoint} />
          <TextInput
            key={link}
            name='links'
            label={link}
            value={newWayPoint.links}
            onChange={this.setNewWayPoint} />
          <h3>False Route</h3>
          <Geosuggest key='falseRoute1'
            type="text"
            onKeyPress={this.setNewWayPoint}
            name='falseRoute1'
            value={newWayPoint.falseRoute1}
            label='False Route 1'
            onSuggestSelect={this.selectF}
            placeHolder="Search False Point"/>
          <Geosuggest key='falseRoute2'
            type="text"
            onKeyPress={this.setNewWayPoint}
            name='falseRoute2'
            value={newWayPoint.falseRoute2}
            label='False Route 2'
            onSuggestSelect={this.selectF}
            placeHolder="Search False Point"/>
          <PoiForm key={`PoiForm${i}`} name={theName} />
        </div>)
      waypointFields = [...waypointFields, newField]
    }
    return (
      <div>
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
