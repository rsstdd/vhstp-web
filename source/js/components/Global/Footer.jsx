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
            <ul>
              <li><a className="hover-effect" href="">Download the App</a></li>
              <li><a className="hover-effect" href=""></a></li>
              <li><a className="hover-effect" href="">Contact Us</a></li>
            </ul>
          </div>
          <div className="footer__links__links2">
            <span className="footer__links--title">
              legal
            </span>
            <ul>
              <li><a className="hover-effect" href="">Terms</a></li>
              <li><a className="hover-effect" href="">Privacy</a></li>
            </ul>
          </div>
        </section>
      </nav>

    );
  }
}


export default Footer;
