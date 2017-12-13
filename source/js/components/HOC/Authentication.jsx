// File Name: components/HOC/Authentication.jsx
// Description: HOC For Authentication Protected Routes
// Used by: config/routes.jsx
// Dependencies:
// ------------------------------------------------------------

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';

@connect(state => ({
  isAuthenticated: state.auth.get('isAuthenticated'),
}))
export default function (ComposedComponent) {
  class Authentication extends Component {
  componentWillMount() {
    const { history, isAuthenticated } = this.props;
    if (!isAuthenticated) {
      history.push('/');
    }
  }

  componentWillUpdate(nextProps) {
    const { history } = this.props;
    if (!nextProps.isAuthenticated) {
      history.push('/')
    }
  }


  render() {
    return <ComposedComponent { ...this.props } />;
  }
}

return withRouter(Authentication);
}
