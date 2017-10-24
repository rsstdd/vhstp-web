import React, { Component } from 'react';
import Routes from 'config/routes';

import Navbar from 'components/Global/Navbar';
import Footer from 'components/Global/Footer';

export default class App extends Component {
  render() {
    return (
      <div className='App'>
        <Navbar />

        <div className='Page'>
          <Routes />
        </div>
        <Footer />
      </div>
    );
  }
}
