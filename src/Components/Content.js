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
      soundSrc: "sounds/elated/",
      imgSrc: "pictures/elated",
      images: Array(12).fill(null)
    };
  }

  getSoundSource() {
    let partialSrcArr = ["sounds/elated/", "sounds/furious/", "sounds/melancholic/"]
    if (this.state.category === 2) {
      return partialSrcArr[this.state.option];
    } return this.state.soundSrc;
  }

  getImgSrc() {
    let partialSrcArr = ["pictures/elated", "pictures/furious", "pictures/melancholic"]
    if (this.state.category === 0) {
      return partialSrcArr[this.state.option];
    } return this.state.imgSrc;
  }

  getImage() {
    let tempArray = this.state.images.slice();
    return tempArray[this.state.nav];
  }

  axiosGetImg() {
    const axios = require("axios");
    axios.get(this.getImgSrc() + this.state.nav + ".svg")
      .then ((response) => {
        let tempArray = this.state.images.slice();
        if (tempArray[this.state.nav] !== response.data) {
          tempArray[this.state.nav] = response.data;
          this.setState({
            images: tempArray
          })
        }
      })
  }

  onClickCategory(cat, opt) {
    this.setState({
      option: opt,
      category: cat,
      soundSrc: this.getSoundSource(),
      imgSrc: this.getImgSrc(),
    });
  }

  onClickNav(nav) {
    this.setState({
      nav: nav,
    })
  }

  render() {
    return (
        <div className="content">
          <Category onClick={this.onClickCategory.bind(this)}/>
          <Media option={this.state.option} category={this.state.category} nav={this.state.nav} soundSrc={this.getSoundSource() + this.state.nav + ".mp3"} img={this.getImage()}/>
          <Nav onClick={this.onClickNav.bind(this)}/>
        </div>
    );
  }

  componentDidMount() {
    this.axiosGetImg();
  }

  componentDidUpdate() {
    this.axiosGetImg();
  }
}
