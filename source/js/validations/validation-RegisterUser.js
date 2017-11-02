// File Name: validation/Validation-RegisterUserForm.js
// Description: Login Form Validation Util Funtion
// Used by: components/LoginForm.jsx
// Dependencies:
// ------------------------------------------------------------

const validate = values => {
  const errors = {};

    // NAME
  if (!values.get('firstName')) {
    errors.firstName = 'Required';
  }
  if (!values.get('lastName')) {
    errors.lastName = 'Required';
  }

    // EMAIL
  if (!values.get('email')) {
    errors.email = 'Required';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.get('email'))) {
    errors.email = 'Invalid email address';
  }

    // PASSWORD
  if (!values.get('password')) {
    errors.password = 'Required';
  }
  if (values.get('password') < 8) {
    errors.password = 'Password Must be or More Chars';
  }

    // CONFIRM PASSWORD
  if (values.get('password') !== values.get('confirmPassword')) {
    errors.password = 'Passwords Do Not Match';
  }
  if (values.get('password') !== values.get('confirmPassword')) {
    errors.confirmPassword = 'Passwords Do Not Match';
  }

    // ADDRESS
  if (!values.get('address1')) {
    errors.address1 = 'Required';
  }
  if (!values.get('city')) {
    errors.city = 'Required';
  }
  if (!values.get('state')) {
    errors.state = 'Required';
  }
  if (!values.get('zip')) {
    errors.zip = 'Required';
  } else if (!/^\b\d{5}(-\d{4})?\b$/.test(values.get('zip'))) {
    errors.zip = 'Invalid Zip Code';
  }

  return errors;
};

export default validate;
