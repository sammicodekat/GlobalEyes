import React from 'react'
import { browserHistory } from 'react-router'

const renderPoisList = pois => (pois.map((poi, i) => (
  <button key={`${poi._id}${i}`} onClick={() => browserHistory.push(`/poi/${poi._id}`)}>
    {/* {gameObj[pointsOfInterest].indexOf(poi._id) ? <img src="/images/checked.png" alt="checkbox" /> : <img src="/images/unchecked.png" alt="checkbox" />} */}
    <img src="/images/unchecked.png" alt="checkbox" />
    <span>{poi.poiName}</span>
  </button>
)))

const PoiList = ({ pois }) => (
  <div className="poiList">
    <h3>Points of Interest</h3>
    <div className="poiItems">
      {renderPoisList(pois || [])}
    </div>
  </div>
)

export default PoiList
