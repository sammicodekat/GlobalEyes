import React from 'react'
import { connect } from 'react-redux'

const Vouchers = ( props ) => {
  return (
    <div className="vouchers">
      <img src="/images/vouchers.png" alt="vouchers"/>
      <span className="remaining"> x{props.userObj.vouchers}</span>
    </div>
  )
}

function mapStateToProps(state) {
  return {
    userObj: state.userObj
  }
}

export default connect(mapStateToProps, null)(Vouchers)
