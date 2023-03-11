import React, { Component } from "react";

export default class Article extends Component {
  render() {
    const {title, content} = this.props.data; 
    const {button} = this.props;
    return (
      <div className="card">
        <h3 className="card-header">{title}</h3>
        <div className="card-body">
          <p>{content}</p>
          {button}
        </div>
      </div>
    );
  }
}
