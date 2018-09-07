import React, { Component } from "react";
import '../css/slideshow.css';
import Category from './Category.js';
import Media from './Media.js';
import Nav from './Nav.js';

export default class Content extends Component {
  render() {
    return (
        <div className="content">
          <Category />
          <Media />
          <Nav />
        </div>
    );
  }
}
