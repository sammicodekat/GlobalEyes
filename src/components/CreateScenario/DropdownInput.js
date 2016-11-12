import React from 'react'

const DropdownInput = ({name, label, onChange, defaultOption, value, error, options, wrapperClass, fieldClass, dropdownClass, errorClass}) => {
  return (
    <div className={wrapperClass}>
      <label htmlFor={name}>{label}</label>
      <div className={fieldClass}>
        <select
          name={name}
          value={value}
          onChange={onChange}
          className={dropdownClass}>
          <option value={value}>{defaultOption}</option>
          {options.map((option) => {
            return <option key={option.value} value={option.value}>{option.text}</option>
          })
          }
        </select>
        {error && <div className={errorClass}>{error}</div>}
      </div>
    </div>
  )
}

export default DropdownInput;
