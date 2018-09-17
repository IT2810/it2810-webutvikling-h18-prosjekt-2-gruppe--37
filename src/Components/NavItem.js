import React, { Component } from "react";
import classNames from "classnames/bind";
import '../css/slideshow.css';

export default class NavItem extends Component {
  render() {
    let navIClass = classNames({
      "selected": this.props.focus,
      "no_select": true
    });
    return (
        <li onClick={() => this.props.onClick()} className={navIClass}>•</li>
    );
  }
}
