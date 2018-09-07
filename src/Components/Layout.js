import React, { Component } from "react";
import '../App.css';
import Header from './Header.js';
import Content from './Content.js';
import Footer from './Footer.js';

export default class Layout extends Component{
  render() {
    return (
        <div className="main_wrapper">
          <Header />
          <Content />
          <Footer />
        </div>
    );
  }
}
