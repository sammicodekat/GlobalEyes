import React from 'react'

const Checkbox = ({name, label, onChange, value, error, wrapperClass, fieldClass, checkboxClass, errorClass}) => {
  if(error && error.length > 0) {
    wrapperClass += ' ' + 'has-error'
  }

  return(
    <div className={wrapperClass}>
      <label htmlFor={name}>{label}</label>
      <div className={fieldClass}>
        <input
          type='checkbox'
          name={name}
          className={checkboxClass}
          value={value}
          onChange={onChange}/>
        {error && <div className={errorClass}>{error}</div>}
      </div>
    </div>
  )
}

export default Checkbox
