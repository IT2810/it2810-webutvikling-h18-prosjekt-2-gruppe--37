import React, { Component } from "react";
import classNames from "classnames/bind";

export default class CategoryOption extends Component {
  render() {
    let catClass = classNames({
      "elated": (this.props.index===0 && this.props.focus),
      "furious": (this.props.index===1 && this.props.focus),
      "melancholic": (this.props.index===2 && this.props.focus),
      "selected": this.props.focus,
      "option": true,
      "no_select": true
    });
    return (
        <p className={catClass} onClick={() => this.props.onClick(this.props.text)}>{this.props.text}</p>
    );
  }
}
