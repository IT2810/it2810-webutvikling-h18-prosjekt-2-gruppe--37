import React, { Component } from "react";
import classNames from "classnames/bind";
import '../css/slideshow.css';

export default class NavItem extends Component {
  constructor(props) {
    super(props);
  };

  render() {
    let navIClass = classNames({
      "NavISelected": this.props.focus
    });
    return (
        <li onClick={() => this.props.onClick()} className={navIClass}>•</li>
    );
  }
}
