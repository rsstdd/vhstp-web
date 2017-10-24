import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { routeCodes } from 'config/routes';
import { Link } from 'react-router-dom';

class Navbar extends React.Component {
  constructor(props){
    super(props);
    this.state= {
      isHidden: false,
      isScrolled: false,
    };

    this.hideBar = this.hideBar.bind(this)
  }

  hideBar(){
    let { isScrolled, isHidden } = this.state;
    console.log('ISCROLLED || IS.HIDDEN', isScrolled, isHidden);
    console.log(window.scrollY);
    
    if (Math.round(window.scrollY) > 100) {
      this.setState({ isScrolled: true });
    } else if (Math.round(window.scrollY) > 500) {
      this.setState({ isHidden: false });
    }

    // this.prev = window.scrollY;
    //   $('.navbar').addClass('scrolled');
    // } else {
    //   $('.navbar').removeClass('scrolled');
    // }

    // window.scrollY > this.prev ?
    //   !isHidden && this.setState({ isHidden: true })
    //   :
    //   isHidden && this.setState({ isHidden: false })

  }

  componentDidMount(){
    window.addEventListener('scroll', this.hideBar);
  }

  componentWillUnmount(){
    window.removeEventListener('scroll', this.hideBar);
  }

  render() {
    console.log('isScrolled', this.state.isScrolled);
    console.log('isHidden', this.state.isHidden);

    let isScrolled = this.state.isScrolled ? '--isScrolled' : '';
    let isHidden = this.state.isHidden ? '--isHidden' : ''

    return (
      <nav className={`Nav Nav${ isHidden || isScrolled }`}>
        <div className="Nav__nav-logo">
          <Link to="/"></Link>
        </div>
      </nav>
    );
  }
}

export default Navbar;
