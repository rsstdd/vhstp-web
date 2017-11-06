// File Name: component/Global/Navbar.jsx
// Description: Navbar
// Used by:
// Dependencies:
// ------------------------------------------------------------

import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { routeCodes } from 'config/routes';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

  // Images

  // Actions

  // Components
// import LoginModal from './../LoginModal';

@connect(state => ({
}))
export default class Navbar extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      isSmaller: false,
      isMobile: false,
    };

    this.smallBar = this.smallBar.bind(this)
    this.signOut = this.signOut.bind(this)
  }

  smallBar(){
    let { isSmaller } = this.state;

    window.scrollY > (this.prev < 350) ?
      !isSmaller && this.setState({ isSmaller: true })
    :
      isSmaller && this.setState({ isSmaller: false })

    this.prev = window.scrollY;
  }

  signOut() {
    const { dispatch, history } = this.props;
    dispatch(signoutUser());
  }

  componentDidMount() {
    window.addEventListener('scroll', this.smallBar);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.smallBar);
  }

  render() {
    let  navContent, navLocation, isAuthenticated, states ;
    // let { navContent, navLocation, isAuthenticated, states } = this.props;
    let isSmallerClass = this.state.isSmaller ? '--isSmaller' : '';

    return (
      <nav className={`Nav Nav${isSmallerClass}`}>
        <div className="Nav__nav-logo">
          <NavLink to="/">
            {/* <img
              src={HummingtreeLogo}
              alt='Hummingtree'
            /> */}
          </NavLink>
        </div>
        <div className="Nav__nav-list">
          <NavLink
            to="/"
            className="hover-effect"
            // activeClassName= "Nav__nav-list__selected"
            >
            Home
          </NavLink>
          <NavLink
            to="dashboard"
            className="hover-effect"
            // activeClassName= "Nav__nav-list__selected"
            >
            Dashboard
          </NavLink>
            {isAuthenticated ? (
              <span>
                <NavLink
                  to={`${navLocation}`}
                  className="hover-effect"
                  // activeClassName="Nav__nav-list__selected"
                >
                  {navContent}
                </NavLink>
                <NavLink
                  to={`/example`}
                  className="hover-effect"
                  // activeClassName="Nav__nav-list__selected"
                >
                  Example
                </NavLink>
                <NavLink
                  to="/"
                  onClick={this.signOut}
                  className="hover-effect"
                  // activeClassName="Nav__nav-list__selected"
                >
                  Sign Out
                </NavLink>
              </span>
            ) : (
              <span>
                <a className="draw-border btn btn__small">Log In</a>
              </span>
            )
          }
        </div>
      </nav>
    );
  }

  static propTypes = {
    navContent: PropTypes.string,
    navLocation: PropTypes.string,
    isAuthenticated: PropTypes.bool,
    dispatch: PropTypes.func,
  }
}
