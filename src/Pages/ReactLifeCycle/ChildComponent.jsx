import React, { Component } from "react";

export default class ChildComponent extends Component {
  constructor(props) {
    super(props);
    console.log("Child constructor");
    this.state = {};
  }

  static getDerivedStateFromProps(newProps, currentState) {
    console.log("getDerivedStateFromProps child");
    return null;
  }

  shouldComponentUpdate(newProps, newState) {
    // this.props: là props trước khi thay đổi 
    // newProps: là sau khi thay đổi 
    console.log("this.props", this.props);
    console.log("newProps", newProps); 
    
    console.log("shouldComponentUpdate child");
    return true;
  }

  render() {
    const {like} = this.props; 
    console.log("render child")
    return (
      
      <div className="container mt-2">
        <div className="bg-dark text-white p-5">
          <p>like: {like}</p>
        </div>
      </div>
    );
  }

  componentDidMount() {
    console.log("componentDidMount child component");
  }
}
