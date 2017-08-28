import React, { Component } from 'react';
import Header from './Header.js';
import Footer from './Footer.js';

export default class BaseLayout extends Component {
  render() {
    return (
      <div>
        <Header />
          <div>
            {this.props.children}
          </div>
        <Footer />
      </div>
    );
  }
}
