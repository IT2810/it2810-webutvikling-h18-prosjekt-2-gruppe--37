import React, { Component } from "react";
import Logo from './Logo.js';
import Nav from './Nav.js';

export default class Header extends Component{
  render() {
    return (
        <div className="header">
          <Logo />
          <Nav />
        </div>
    );
  }
}
