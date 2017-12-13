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

  // Utils
import debounce from '../../utils/debounce';

@connect(state => ({
}))
export default class Navbar extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      isSmaller: false,
      isMobile: null,
      isHidden: true,
      isVisible: false,
      isOpen: props && typeof props.isOpen !== 'undefined' ? props.isOpen : false
    };

    this.smallBar = this.smallBar.bind(this);
    this.signOut = this.signOut.bind(this);
    this.resize = debounce(this.resize, 500).bind(this);
  }

  componentDidMount() {
    console.log('window.innerWidth <= 760',  window.innerWidth <= 500);
    console.log('isMobile', window.innerWidth);
    window.addEventListener('resize', this.resize);
    this.resize();
  }

  resize() {
    const width = (window.innerWidth) ? window.innerWidth <= 500 : 1000;
    console.log('resize was called');
    this.setState({isMobile: width});
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
    let { isMobile } = this.state;
    console.log('IS_MOBILE', this.state.isMobile);
    let isSmallerClass = this.state.isSmaller && !isMobile ? '--isSmaller' : '';

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

        { isMobile ? (
          <div className="hamburger">
            <span className="hamburger__bar  arrow-top-fall"></span>
            <span className="hamburger__bar arrow-middle-fall"></span>
            <span className="hamburger__bar arrow-bottom-fall"></span>
          </div>
        ) : (
          <div>
            <NavLink
              to="/"
              className="hover-effect"
              // activeClassName= "Nav__nav-list__selected"
              >
              Home
            </NavLink>
          </div>
        )}
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
                Examples
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
              {/* <a className="draw-border btn btn__small">Log In</a> */}
            </span>
          )}
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
