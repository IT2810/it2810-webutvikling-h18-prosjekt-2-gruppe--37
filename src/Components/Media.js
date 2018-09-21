import React, { Component } from "react";

export default class Media extends Component {
  constructor(props) {
    super(props);
    this.state = {
      quotes: null,
      lastSelectedOption: null,
      loaded: false
    }
  }

  getText() {
    if (this.props.category === 1) {
      if (this.props.option === 0) {
        return this.state.quotes.elated;
      } else if (this.props.option === 1) {
        return this.state.quotes.furious;
      } else if (this.props.option === 2) {
        return this.state.quotes.melancholic;
      }
    }
      return this.state.lastSelectedOption;
  }

  axiosGetJSON() {
    const axios = require("axios");
    axios.get("quotes/quotes.json")
      .then ((response) => {
        this.setState({
          loaded: true,
          quotes: response.data.quotes,
          lastSelectedOption: response.data.quotes.elated
        })
      })
  }

  render() {
    if (this.state.loaded) {
      let selectedJSON = this.getText()[this.props.nav];
      return (
        <div className="media">
            <div className="mediaText">
              <p>{selectedJSON.text}</p>
              <p>- {selectedJSON.author}</p>
            </div>
            <div id="image" dangerouslySetInnerHTML={{__html: this.props.img}}/>
            <audio autoPlay loop src={this.props.soundSrc}/>
        </div>
      );
    } return (
      <div className="media">
          <p>Loading</p>
          <div id="image" dangerouslySetInnerHTML={{__html: this.props.img}}/>
          <audio autoPlay loop src={this.props.soundSrc}/>
      </div>
    );
  }

  componentDidMount() {
    this.axiosGetJSON();
  }
}
