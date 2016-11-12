import React from 'react'

const NumberInput = ({ name, min, max, label, onChange, placeholder, value, error, wrapperClass, fieldClass, inputClass, errorClass }) => {
  if (error && error.length > 0) {
    wrapperClass += ' ' + 'has-error'
  }

  return (
    <div className={wrapperClass}>
      <label htmlFor={name}>{label}</label>
      <div className={fieldClass}>
        <input
          type="number"
          name={name}
          className={inputClass}
          placeholder={placeholder}
          value={value}
          min={min}
          max={max}
          onChange={onChange} />
        {error && <div className={errorClass}>{error}</div>}
      </div>
    </div>
  )
}

export default NumberInput
