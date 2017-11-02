// File Name: Validation/Validation-LoginForm.js
// Description: Login Form Validation Util Funtion
// Used by: components/LoginForm.jsx
// Dependencies:
// ------------------------------------------------------------

const validate = (values) => {
  const errors = {};

  if (!values.get('email')) {
    errors.email = 'Required'
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.get('email'))) {
    errors.email = 'Invalid email address';
  }

  if (!values.get('password')) {
    errors.password = 'Required'
  } else if (values.get('password').length < 8) {
    errors.password = 'Password must be at least 8 characters';
  }

  return errors;
}

export default validate;
