import React, { Component } from "react";

export default class ReactLifeCycle extends Component {
  constructor(props) {
    super(props);
    console.log("constructor");
    this.state = {
      number: 1,
    };
  }

  // Hàm này dùng để xử lý state trước khi render ra giao diện
  static getDerivedStateFromProps(newProps, currentState) {
    console.log("getDerivedStateFromProps");
    return {
      number: 2,
    }; //return null là state giữ nguyên
  }

  render() {
    console.log("render constructor");
    return (
      <div className="container">
        <h3>number: {this.state.number}</h3>
      </div>
    );
  }
}
