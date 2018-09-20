import React, { Component } from "react";
import classNames from "classnames/bind";
import '../css/slideshow.css';


export default class NavItem extends Component {
  render() {
    let navIClass = classNames({
      "selected": this.props.focus,
      "no_select": true
    });
    return (<li onClick={() => this.props.onClick()} className={navIClass}>•</li>);

    /* Dette funket ikke med if-statement.
    * ett annet problem vil også være å få f-eks 1-2-3-4
    * ( at de er unike for hver knapp)
    * FIKSE DETTEM ED JQuery?*/
      /* if (screen.width >= 768) {
          return (<li onClick={() => this.props.onClick()} className={navIClass}>•</li>
          );
      }

      if (screen.width >= 1024) {
          return (<li onClick={() => this.props.onClick()} className={navIClass}>•</li>
          );
      }
      else {
          return (<li onClick={() => this.props.onClick()} className={navIClass}>•</li>
          );
      } */
  }
}

