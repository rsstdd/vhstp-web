import React, { Component } from 'react';

  // Images
// import Logo from '../../../assets/svg/footer-logo.svg';

class Footer extends Component {
  render() {
    return(
      <nav className="footer">
        <section className="footer__logo">
          {/* <Logo /> */}
          <p>&copy; Copyright SHT-WEB 2017. All rights reserved.</p>
        </section>

        <section className="footer__links">
          <div className="footer__links__links1">
            <span className="footer__links--title">
              learn more
            </span>
            <ul className="nav-list">
              <li><a href="">Download the App</a></li>
              <li><a href=""></a></li>
              <li><a href="">Contact Us</a></li>
            </ul>
          </div>
          <div className="footer__links__links2">
            <span className="footer__links--title">
              legal
            </span>
            <ul className="nav-list">
              <li><a href="">Terms</a></li>
              <li><a href="">Privacy</a></li>
            </ul>
          </div>
        </section>
      </nav>

    );
  }
}


export default Footer;
