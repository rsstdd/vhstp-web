import React, { Component } from 'react';

// import Logo from '../../../assets/svg/footer-logo.svg';

class Footer extends Component {
  render() {
    return(
      <nav id="footer">
        <section className="humtree">
          {/* <Logo /> */}
          <p>&copy; Copyright SHT-WEB 2017. All rights reserved.</p>
        </section>
        
        <section className="links">
          <div className="links1">
            <ul>
              <li><a href="">Download the App</a></li>
              <li><a href=""></a></li>
              <li><a href="">Contact Us</a></li>
            </ul>
          </div>
          <div className="links2">
            <ul>
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
