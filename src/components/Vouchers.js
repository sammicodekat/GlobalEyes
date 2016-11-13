import React from 'react'

const Vouchers = ({ vouchers }) => {
  return (
    <div className="vouchers">
      <span className="remaining">{vouchers}</span>
    </div>
  )
}

export default Vouchers
