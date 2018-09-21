import React, { Component } from "react";

export default class Media extends Component {
render() {
    return (
        <div className="media">
            <p>media</p>
            <div id="image" dangerouslySetInnerHTML={{__html: this.props.img}}/>
            <audio autoPlay loop src={this.props.soundSrc}/>
        </div>
        );
    }
}
