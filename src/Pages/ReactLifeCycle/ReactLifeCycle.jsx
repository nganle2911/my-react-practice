import React, { Component } from "react";
import ChildComponent from "./ChildComponent";

export default class ReactLifeCycle extends Component {
  constructor(props) {
    super(props);
    console.log("constructor");
    this.state = {
      number: 1,
      like: 1
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

  shouldComponentUpdate(newProps, newState) {
    console.log("shouldComponentUpdate");
    return true; 
  }

  render() {
    console.log("render constructor");
    return (
      <div className="">
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

        <button className="btn btn-dark mx-2" onClick={() => {
          this.setState({
            like: this.state.like + 1 
          })
        }}>
          <i className="fa fa-heart text-danger"></i>
        </button>
        <ChildComponent like={this.state.like} />
      </div>
    );
  }

  // Can thiệp vào dữ liệu trên giao diện sau khi giao diện đã có
  // Thường sử dụng để gọi API hoặc sử dụng các thư viện lên html (animation...)
  componentDidMount() {
    console.log("ComponentDidMount");
  }
}
