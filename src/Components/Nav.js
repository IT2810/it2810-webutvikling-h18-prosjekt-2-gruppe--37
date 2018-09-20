import React, { Component } from "react";
import '../css/slideshow.css';
import NavItem from "./NavItem.js";

/*
  To connect the AJAX loading with the userinput, just call;
  - this.getSelectedNumber(); for the index of the mediatypes
*/

export default class Nav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      navItems: Array(4).fill(true, 0, 1)
    };
  }

  handleClick(i) {
    const navItems = this.state.navItems.slice();
    for (let i = 0; i < navItems.length; i++) {
        navItems[i] = false;
    }
    navItems[i] = true;
    this.setState({navItems: navItems});
  }

  getSelectedNumber() {
    let mediaNumber;
    for (let i = 0; i < this.state.navItems.length; i++) { if (this.state.navItems[i]) { mediaNumber = i;}}
    return mediaNumber;
  }

  renderNavItem(i) {
    return <NavItem focus={this.state.navItems[i]} onClick={() => this.handleClick(i)}/>;
  }

  update() {
    this.props.onClick(this.getSelectedNumber());
  }

  render() {
    return (
      <ul onClick={this.update.bind(this)} className="nav">
        {this.renderNavItem(0)}
        {this.renderNavItem(1)}
        {this.renderNavItem(2)}
        {this.renderNavItem(3)}
      </ul>
    );
  }
}
