import React, { Component } from "react";
import '../css/slideshow.css';
import Category from './Category.js';
import Media from './Media.js';
import Nav from './Nav.js';

export default class Content extends Component {
  constructor(props) {
    super(props);
    this.state = {
      category: 0,
      option: 0
    };
  }

  onClick(cat, opt) {
    this.setState({
      category: cat,
      option: opt
    });
  }

  render() {
    return (
        <div className="content">
          <Category onClick={this.onClick.bind(this)}/>
          <Media option={this.state.option} category={this.state.category}/>
          <Nav />
        </div>
    );
  }
}
