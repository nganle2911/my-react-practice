import React, { Component, PureComponent } from "react";

/**
 * *PureComponent - là 1 class giống hệt component tuy nhiên không có lifecycle shouldComponentUpdate vì PureComponent đã tự xử lý so sánh props có thay đổi hay không giúp mình rồi (nếu thay đổi thì render, không thay đổi không render).
 * Tuy nhiên, sự so sánh này chỉ xãy ra đối với props là primitive value (number, string, boolean, null, undefined) -> shallow compare 
 * Đối với props là reference value (object, array...) thì cần phải xử lý clone ra trước khi thay đổi state. 
 *  
 * */ 
export default class ChildComponent extends PureComponent {
  constructor(props) {
    super(props);
    console.log("Child constructor");
    this.state = {};
  }

  static getDerivedStateFromProps(newProps, currentState) {
    console.log("getDerivedStateFromProps child");
    return null;
  }

  // shouldComponentUpdate(newProps, newState) {
  //   // this.props: là props trước khi thay đổi 
  //   // newProps: là sau khi thay đổi 
  //   // console.log("this.props", this.props);
  //   // console.log("newProps", newProps); 
  //   if (this.props.like === newProps.like) {
  //     return false;
  //   } 
    
  //   console.log("shouldComponentUpdate child");
  //   return true;
  // }

  render() {
    const {objectLike} = this.props; 
    console.log("render child")
    return (
      
      <div className="container mt-2">
        <div className="bg-dark text-white p-5">
          <p>like: {objectLike.like}</p>
        </div>
      </div> 
    );
  }

  componentDidMount() {
    console.log("componentDidMount child component");
  }

  componentDidUpdate() {
    // Tương tự didmount (chạy sau render, tuy nhiên sẽ chạy mỗi khi bất kỳ state nào trên component này thay đổi)
    // Lưu ý: Khi setState trong component này, thì phải có if (bắt buộc) - nếu không có if thì sẽ thành lập 1 vòng lặp vô tận 
    this.setState({

    })
  }
}
