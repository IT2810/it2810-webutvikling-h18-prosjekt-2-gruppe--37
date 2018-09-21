import React, { Component } from "react";
import '../css/layout.css';
import Header from './Header.js';
import Content from './Content.js';

export default class Layout extends Component{
  render() {
    return (
        <div className="main_wrapper">
          <Header />
          <Content />
        </div>
    );
  }
}
