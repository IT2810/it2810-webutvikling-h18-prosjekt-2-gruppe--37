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
      option: 0,
      nav: 0,
      soundSrc: "sounds/elated/"
    };
  }

  getSoundSource() {
    let partialSrcArr = ["sounds/elated/", "sounds/furious/", "sounds/melancholic/"]
    if (this.state.category === 2) {
      return partialSrcArr[this.state.option];
    } return this.state.soundSrc;
  }

  onClickCategory(cat, opt) {
    this.setState({
      option: opt,
      category: cat,
      soundSrc: this.getSoundSource()
    });
  }

  onClickNav(nav) {
    this.setState({
      nav: nav
    })
  }

  render() {
    return (
        <div className="content">
          <Category onClick={this.onClickCategory.bind(this)}/>
          <Media option={this.state.option} category={this.state.category} nav={this.state.nav} test={this.getSoundSource() + this.state.nav + ".mp3"}/>
          <Nav onClick={this.onClickNav.bind(this)}/>
        </div>
    );
  }
}
