import React from 'react'

export const renderField = ({input, label, type, disabled, meta: {touched, error}, ...others}) => (
  <div>
    <label>{label}</label>
    <div>
      <input {...input} placeholder={label} type={type} disabled={disabled} {...others}/>

      {touched && (error && <span>{error}</span>)}
    </div>
  </div>
);
