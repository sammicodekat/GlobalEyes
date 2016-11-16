import React from 'react'
import { browserHistory } from 'react-router'

const renderPoisList = pois => (pois.map((poi, i) => (
  <button key={`${poi._id}${i}`} onClick={() => browserHistory.push(`poi/${poi._id}`)}>{poi.poiName}</button>
)))

const PoiList = ({ pois }) => (
  <div>
    {renderPoisList(pois || [])}
  </div>
)

export default PoiList
