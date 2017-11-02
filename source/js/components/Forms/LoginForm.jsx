// File Name: components/LoginForm.jsx
// Description: Login Modal Form
// Used by: LoginModal in Home/index.jsx
// Dependencies:
// ------------------------------------------------------------

import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import { reduxForm, Field, Form } from 'redux-form/immutable';
import { connect } from 'react-redux';

  // Components
import renderField from './FormRenderField';
import Loading from './../Loading';
import Messages from './../Messages';

  // Utils
import validate from './../../utils/Validation-LoginForm';

@connect(state => ({
  tokenError: state.app.get('tokenError'),
  tokenSuccess: state.app.get('tokenSuccess')
}))
@reduxForm({
  form: 'LoginForm',
  validate,
})
export default class LoginForm extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {
      handleSubmit,
      pristine,
      submitting,
      reset,
      history,
      tokenError,
      tokenSuccess,
      error,
    } = this.props;

    return (
      <div>
        {tokenError && <Messages message={ tokenError } msgType="error"/>}
        <Form id="loginForm" onSubmit={handleSubmit}>
          <Field
            name="email"
            id="email"
            component={renderField}
            type="email"
            placeholder="Email"
          />
          <Field
            name="password"
            id="password"
            component={ renderField }
            type="password"
            placeholder="Password"
          />
          <button
              id="submit-btn"
              className="btn btn__clear-btn"
              action="submit"
              disabled={ pristine || submitting }
            >
            sign in
          </button>
        </Form>
      </div>
    )
  }
}
