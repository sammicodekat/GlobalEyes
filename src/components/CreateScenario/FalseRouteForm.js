import React, { Component } from 'react'
import Geosuggest from 'react-geosuggest'

export default class FalseRouteForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      routeCount: 0
    }
  }

  addFalseRoute() {
    let { routeCount } = this.state
    routeCount += 1
    this.setState({ routeCount })
  }

  removeFalseRoute() {
    let { routeCount } = this.state
    if (routeCount > 0) {
      routeCount -= 1
      this.setState({ routeCount })
    }
  }

  render() {
    const { onChange, newScenario, onClick, onSelect, name } = this.props
    const { routeCount } = this.state
    let falseRouteFields = []
    for (let j = 1; j <= routeCount; j += 1) {
      const FRName = `${name}_falseroute${j}`
      const newFR = (<Geosuggest key={FRName}
        id={FRName}
        type="text"
        onKeyPress={onChange}
        name={FRName}
        value={newScenario[FRName]}
        label={FRName}
        onSuggestSelect={onSelect}
                       placeHolder="Search Point of Interests"/>)
      falseRouteFields = [...falseRouteFields, newFR]
    }
    const deleteButton = routeCount > 0 ? (<button type="button" onClick={() => this.removeFalseRoute()}>Delete FalseRoute</button>) : ''
    return (
      <div>
        {falseRouteFields}
        <button type="button" onClick={() => this.addFalseRoute()}>Add FalseRoute</button>
        {deleteButton}
      </div>
    )
  }
}
