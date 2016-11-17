import React from 'react'
import { browserHistory } from 'react-router'

const renderPoisList = (params, pois) => (pois.map((poi, i) => (
  <button key={`${poi._id}${i}`} onClick={() => browserHistory.push(`/${params.id}/location/${params.waypointId}/poi/${poi._id}`)}>
    {/* {gameObj[pointsOfInterest].indexOf(poi._id) ? <img src="/images/checked.png" alt="checkbox" /> : <img src="/images/unchecked.png" alt="checkbox" />} */}
    <img src="/images/unchecked.png" alt="checkbox" />
    <span>{poi.poiName}</span>
  </button>
)))

const PoiList = (props) => {
  const { pois, params } = props
  return (
    <div className="poiList">
      <h3>Points of Interest</h3>
      <div className="poiItems">
        {renderPoisList(params, pois || [])}
      </div>
    </div>
  )
}

export default PoiList

// <Link to={`/poi/${pois[0]._id}`}>Test Link</Link>
