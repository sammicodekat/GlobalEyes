import React, { Component } from 'react'
import Geosuggest from 'react-geosuggest'
import TextArea from './TextArea'
import TextInput from './TextInput'

export default class FalseRouteForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      routeCount: 0,
      newFalseRoute: {},
      field: ''
    }
  }

  // addFalseRoute() {
  //   let { routeCount } = this.state
  //   routeCount += 1
  //   this.setState({ routeCount })
  // }
  //
  // removeFalseRoute() {
  //   let { routeCount } = this.state
  //   if (routeCount > 0) {
  //     routeCount -= 1
  //     this.setState({ routeCount })
  //   }
  // }

  removeFalseRoute() {
    let { routeCount } = this.state
    if (routeCount > 0) {
      routeCount -= 1
      this.setState({ routeCount })
    }
  }

  addFalseRoute() {
    let { routeCount } = this.state
    if (routeCount === 0) {
      routeCount += 1
      this.setState({ routeCount })
    }
  }

  select = (suggest) => {
    const { newFalseRoute } = this.state
    newFalseRoute.poiName = suggest.label
    return this.setState({ newFalseRoute })
  }

  render() {
    const { onChange, newScenario, onClick, onSelect, name } = this.props
    const { routeCount, newFalseRoute } = this.state
    let falseRouteFields = []

    for (let j = 1; j <= routeCount; j += 1) {
      const FRName = `${name}_falseroute${j}`
      const newFR = (
        <div>
          <Geosuggest
            key={FRName}
            id={FRName}
            type="text"
            onKeyPress={onChange}
            name={FRName}
            value={newScenario[FRName]}
            label={FRName}
            onSuggestSelect={onSelect}
            placeHolder="Enter Fake Waypoint Location"
          />
          <TextArea
            key={text}
            name="text"
            placeholder="Waypoint Description"
            value={newFalseRoute.text}
            onChange={this.setNewPoi}
          />
          <TextInput
            key={link}
            name="links"
            placeholder="Enter Photo URL"
            value={newFalseRoute.links}
            onChange={this.setNewPoi}
          />
        </div>
      )
      falseRouteFields = [...falseRouteFields, newFR]
    }
    // const deleteButton = routeCount > 0 ? (<button type="button" onClick={() => this.removeFalseRoute()}>Delete FalseRoute</button>) : ''
    return (
      <div>
        {falseRouteFields}
        <button type="button" className="addWaypointBtn" onClick={() => this.addFalseRoute()}><span>+</span>Add False Waypoint</button>
        {/* {deleteButton} */}
      </div>
    )
  }
}
