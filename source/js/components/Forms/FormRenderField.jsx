// File Name: components/FormRenderField.jsx
// Description: Field Component For React Form
// Used by: All Forms
// Dependencies:
// ------------------------------------------------------------

import React from 'react';

const renderField = ({
  input,
  placeholder,
  label,
  type,
  meta: { asyncValidating, touched, error, warning }
}) => (
  <div>
    <label>{ label && label }</label>
    <div className={asyncValidating ? 'async-validating' : ''}>
      <input {...input} type={type} placeholder={placeholder}  />
      {touched && error && <span>{error}</span>}
    </div>
  </div>
);

export default renderField;
