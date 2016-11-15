import React from 'react'
import Geosuggest from 'react-geosuggest'

const GoogleInput = ({ name, id, label, onChange, placeholder, value, error, wrapperClass, fieldClass, inputClass, errorClass }) => {
  if (error && error.length > 0) {
    wrapperClass += ' ' + 'has-error'
  }
  return (
    <div className={wrapperClass}>
      <label htmlFor={name}>{label}</label>
      <div className={fieldClass}>
        <Geosuggest
          id={id}
          type="text"
          onChange={onChange}
          name={name}
          value={value || ''}
        />
        {error && <div className={errorClass}>{error}</div>}
      </div>
    </div>
  )
}

export default GoogleInput
