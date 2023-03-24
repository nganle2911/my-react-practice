import React, { Component } from "react";
import ChildComponent from "./ChildComponent";

export default class ReactLifeCycle extends Component {
  constructor(props) {
    super(props);
    console.log("constructor");
    this.state = {
      number: 1,
      like: 1,
      objectLike: {
        like: 5
      },
      count: 30
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
        <h3>object like: {this.state.objectLike.like}</h3>
        <h3>Count: {this.state.count}</h3>
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
          // this.setState({
          //   like: this.state.like + 1 
          // })
          let {objectLike} = this.state; 
          objectLike.like = objectLike.like + 1; 
          this.setState({
            objectLike: {...objectLike}
          })
        }}>
          <i className="fa fa-heart text-danger"></i>
        </button>
        <ChildComponent objectLike={this.state.objectLike} />
      </div>
    );
  }

  timeoutFunc = null; 
  componentDidMount() {
    // Can thiệp vào dữ liệu trên giao diện sau khi giao diện đã có
    // Thường sử dụng để gọi API hoặc sử dụng các thư viện lên html (animation...)
    // Chạy 1 lần duy nhất và đầu tiên sau khi component render 
    console.log("ComponentDidMount");

    this.timeoutFunc = setInterval(() => {
      this.setState({
        count: this.state.count - 1
      })
      console.log("123");
    }, 1000); //tham số thứ 2 tính bằng mili giây để thực thi arrow function 
  }

  componentWillUnmount() {
    // Chạy trước khi component mất khỏi giao diện (React DOM) 
    if (this.timeoutFunc) {
      clearInterval(this.timeoutFunc);
    }
  }
}
