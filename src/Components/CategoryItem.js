import React, { Component } from "react";
import classNames from "classnames/bind";

export default class CategoryItem extends Component {
  render() {
    let catClass = classNames({
      "catItem": true,
      "selected": this.props.focus,
      "no_select": true
    });
    return (
        <p className={catClass} onClick={() => this.props.onClick(this.props.text)}>{this.props.text} </p>
    );
  }
}
