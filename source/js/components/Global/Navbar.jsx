// File Name: component/Global/Navbar.jsx
// Description: Navbar
// Used by:
// Dependencies:
// ------------------------------------------------------------

import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { routeCodes } from 'config/routes';
import { Link } from 'react-router-dom';
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
          <Link to="/">
            {/* <img
              src={HummingtreeLogo}
              alt='Hummingtree'
            /> */}
          </Link>
        </div>
        <div className="Nav__nav-list">
          <Link to="/">Home</Link>
          { isAuthenticated ? (
              <span>
                <Link to={`${navLocation}`}>
                  {navContent}
                </Link>
                <Link to={`/example`}>
                  Example
                </Link>
                <Link
                  to="/"
                  onClick={this.signOut}
                >
                  Sign Out
                </Link>
              </span>
            ) : (
              <span>
                <a className="btn btn__small btn__clear-btn">Log In</a>
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
