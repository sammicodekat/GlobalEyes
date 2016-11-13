import React from 'react'
import { browserHistory } from 'react-router'

const renderPoisList = pois => (pois.map( poi => (
  <button key={poi._id} onClick={() => browserHistory.push(`poi/${poi._id}`)}>{poi.poiName}</button>
)))

const PoiList = ({ pois }) => (
  <div>
    {renderPoisList(pois || [])}
  </div>
)

export default PoiList
