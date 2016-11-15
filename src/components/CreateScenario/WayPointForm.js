import React, { Component } from 'react'
import Geosuggest from 'react-geosuggest'
import TextInput from './TextInput'
import PoiForm from './PoiForm'
import Link from './ClueLinkForm'
import FalseRoute from './FalseRouteForm'

export default class WayPointForm extends Component {
  constructor(props) {
    super(props)
  }


  render() {
    const { onChange, newScenario, onClick, onSelect, getLabel, waypointCount } = this.props
    let waypointFields = []
    for (let i = 1; i <= waypointCount; i ++ ) {
      const theName = `waypoint${i}`
      const Label = i === 1? `Start Location` : `Way Point ${i}`
      const newField = (
        <div key={`${theName}${i}`} className='waypointForm'>
          <h3>{Label}</h3>
          <Geosuggest
            id={theName}
            type="text"
            onKeyPress={onChange}
            name={theName}
            value={newScenario[theName]}
            // label={theName}
            onSuggestSelect={onSelect}
            getSuggestLabel={getLabel}
            placeholder="Search Waypoint"
          />
          <TextInput
            key={theName}
            name={theName}
            label={theName}
            value={newScenario[theName]}
            onChange={onChange} />
          <Link {...this.props} />
          <PoiForm key={`PoiForm${i}`} onChange={onChange} newScenario={newScenario} onClick={onClick} onSelect={onSelect} name={theName} />
          <FalseRoute {...this.props} />
        </div>)
      waypointFields = [...waypointFields, newField]
    }

    return (
      <div>
        {waypointFields}
        <button className="btnClass" type="submit" onClick={onClick}>Confirm WayPoint</button>
      </div>
    )
  }
}
