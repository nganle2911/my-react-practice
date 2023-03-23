import React, { Component } from "react";

export default class note extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // include state
    };
  }

  static getDerivedStateFromProps() {
    return {
      // set state
    };
  }

  render() {
    return <div>{this.state}</div>;
  }

  componentDidMount() {
    // Function called after rendering UI
  }
}
