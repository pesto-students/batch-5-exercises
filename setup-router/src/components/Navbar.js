import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import '../styles/App.css';

export default class Navbar extends Component {
  state = {
    home: true,
    about: false,
    contact: false
  }
  toggleHome = () => {
    this.setState({ home: true, about: false, contact: false });
  }
  toggleAbout = () => {
    this.setState({ home: false, about: true, contact: false });
  }
  toggleContact = () => {
    this.setState({ home: false, about: false, contact: true });
  }

  render() {
    return (
      <ul className="nav">
        <li className={this.state.home ? 'active' : ''} onClick={this.toggleHome}><Link to='/' style={{ textDecoration: 'none', color: 'white' }}>Home</Link></li>
        <li className={this.state.about ? 'active' : ''} onClick={this.toggleAbout}><Link to='/About' style={{ textDecoration: 'none', color: 'white' }}>About Us</Link></li>
        <li className={this.state.contact ? 'active' : ''} onClick={this.toggleContact}><Link to='/Contact' style={{ textDecoration: 'none', color: 'white' }}>Contact</Link></li>
      </ul>
    );
  }
}
