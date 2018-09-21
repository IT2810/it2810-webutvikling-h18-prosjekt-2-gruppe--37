import React, { Component } from "react";
import CategoryItem from "./CategoryItem.js";
import CategoryOption from "./CategoryOption";

/*
  To connect the AJAX loading with the userinput, just call;
  - this.getSelectedOption(); for the 'mood' &
  - this.getSelectedCategory(); for the mediatype
*/

export default class Category extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selCat: Array(3).fill(true, 0, 1),
      catOpt: [Array(3).fill(true, 0, 1), Array(3).fill(true, 0, 1), Array(3).fill(true, 0, 1)]
    };
    this.categories = ["Pictures", "Quotes", "Sounds"];
    this.options = ["Elated", "Furious", "Melancholic"];
  }

  handleClickCategory(i) {
    const selCat = this.state.selCat.slice();
    for (let i = 0; i < selCat.length; i++) { selCat[i] = false;}
    selCat[i] = true;
    this.setState({selCat: selCat}, () => {
      this.update();
    });
  }

  handleClickOption(i, catIndex) {
    const catOpt = this.state.catOpt.slice();
    for (let i = 0; i < catOpt[catIndex].length; i++) {catOpt[catIndex][i] = false;}
    catOpt[catIndex][i] = true;
    this.setState({catOpt: catOpt}, () => {
      this.update();
    });
  }

  getSelectedCategory() {
    let catIndex;
    for (let i = 0; i < this.state.selCat.length; i++) {if (this.state.selCat[i]) {catIndex = i;}}
    return catIndex;
  }

  getSelectedOption() {
    let catIndex = this.getSelectedCategory();
    let optIndex;
    for (let i = 0; i < this.state.catOpt[catIndex].length; i++) {if (this.state.catOpt[catIndex][i]) {optIndex = i;}}
    return optIndex;
  }

  renderItem(i) {
    return <CategoryItem text={this.categories[i]} focus={this.state.selCat[i]} onClick={() => this.handleClickCategory(i)}/>;
  }

  renderOption(i) {
    return <CategoryOption text={this.options[i]} index={i} focus={this.state.catOpt[this.getSelectedCategory()][i]}
    onClick={() => this.handleClickOption(i, this.getSelectedCategory())}/>;
  }

  update() {
    this.props.onClick(this.getSelectedCategory(), this.getSelectedOption());
  }

  render() {
    return (
      <div className="category">
        {this.renderItem(0)}
        {this.renderItem(1)}
        {this.renderItem(2)}
        {this.renderOption(0)}
        {this.renderOption(1)}
        {this.renderOption(2)}
      </div>
    );
  }
}
