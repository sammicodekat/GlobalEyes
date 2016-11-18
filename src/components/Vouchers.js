import React from 'react'
import { connect } from 'react-redux'

const Vouchers = ( props ) => {
  return (
    <div className="vouchers">
      <span className="remaining">{props.userObj.vouchers}</span>
    </div>
  )
}

function mapStateToProps(state) {
  return {
    userObj: state.userObj
  }
}

export default connect(mapStateToProps, null)(Vouchers)

