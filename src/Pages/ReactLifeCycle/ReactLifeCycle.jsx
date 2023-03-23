import React, { Component } from "react";
import ChildComponent from "./ChildComponent";

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
    // return {
    //   number: 2,
    // }; //return null là state giữ nguyên
    return null; 
  }

  shouldComponentUpdate(newProps, currentState) {
    console.log("shouldComponentUpdate");
    return false; 
  }

  render() {
    console.log("render constructor");
    return (
      <div className="container">
        <h3>number: {this.state.number}</h3>
        <button
          className="btn btn-success"
          onClick={() => {
            this.setState({
              number : this.state.number + 1
            });
          }}
        >
          +
        </button>
        <ChildComponent />
      </div>
    );
  }

  // Can thiệp vào dữ liệu trên giao diện sau khi giao diện đã có
  // Thường sử dụng để gọi API hoặc sử dụng các thư viện lên html (animation...)
  componentDidMount() {
    console.log("ComponentDidMount");
  }
}
