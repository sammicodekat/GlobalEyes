import React from 'react'

const TextArea = ({ name, id, label, onChange, placeholder, value, error, wrapperClass, fieldClass, inputClass, errorClass }) => {
  if (error && error.length > 0) {
    wrapperClass += ' ' + 'has-error'
  }
  return (
    <div className={wrapperClass}>
      <label htmlFor={name}>{label}</label>
      <div className={fieldClass}>
        <textarea
          id={id}
          // type="text"
          name={name}
          className={inputClass}
          placeholder={placeholder}
          value={value || ''}
          onChange={onChange}/>
        {error && <div className={errorClass}>{error}</div>}
      </div>
    </div>
  )
}

export default TextArea
