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

  shouldComponentUpdate(newProps, currentState) {
    console.log("shouldComponentUpdate child");
    return false;
  }

  render() {
    return <div>ChildComponent</div>;
  }

  componentDidMount() {
    console.log("componentDidMount child component");
  }
}
