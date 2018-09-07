import React, { Component } from "react";

export default class Media extends Component {
  render() {
    return (
      <div className="media">
        <p> MEDIA </p>
        <img alt="dummy text for img."/>
        <audio controls>
          <source src="#"/>
        </audio>
      </div>
    );
  }
}
