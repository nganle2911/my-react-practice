import React, { Component } from "react";

export default class DataBinding extends Component {
    src = "https://picsum.photos/id/217/200/300"; 
  name = "Kim-Ngan";

  renderCard = () => {
    // nội dung phương thức sẽ trả về: JSX, string, boolean, number
    return (
      <div>
        Hello World !<p>Hello {this.name}</p>
      </div>
    );
  };

  render() {
    const title = "CyberSoft";

    return (
      <div className="container">
        <h3>Data Binding</h3>
        <p id="txt">Title: {title}</p>

        <hr />
        <img src={this.src} alt="..." className="w-25" />

        <hr />
        {this.renderCard()}
      </div>
    );
  }
}
