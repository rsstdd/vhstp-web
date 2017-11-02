// File Name: components/Home/index.js
// Description: Home View
// Used by: App
// Dependencies:
// ------------------------------------------------------------

import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router';

  // Components

  // Actions

  // Utils

  // Images

@connect(state => ({
}))
class Home extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
  }

  render() {
    const {} = this.props;

    return (
      <section>
        <section className="Home container-fluid">
          <div className="Home__header col-sm center-sm">
            <h1>Volunteer Hours Management System.</h1>
            <h2>We are the best at VHMS.</h2>
          </div>
          <div className="row Home__about">
            <div className="col-sm center-sm">
              <h3>Much Wow! So Cool</h3>
              <p>lorem ipsum we do cool stuff</p>
            </div>
            <div className="col-sm center-sm">
              <h3>Much Wow! So Cool</h3>
              <p>lorem ipsum we do cool stuff</p>
            </div>
            <div className="col-sm center-sm">
              <h3>I am an image or graphic!</h3>
            </div>
          </div>
        </section>
      </section>
    );
  };
}

export default withRouter(Home);
