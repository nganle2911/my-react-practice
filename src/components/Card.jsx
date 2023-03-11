// rcc - react class component
import React, { Component } from "react";

export default class Card extends Component { //Tên class là tên thẻ
  

  methodA() {}

  methodB() {}

  render() {  //Nội dung phương thức render() sẽ là giao diện của thẻ (giao diện của component sẽ chứa trong return)
   

    return (
      <div className="card text-white bg-primary">
        <img className="card-img-top" src="https://picsum.photos/id/180/200/200" alt="Title" />
        <div className="card-body">
          <h4 className="card-title">Product name</h4>
          <p className="card-text">Description</p>
        </div>
      </div>
    );
  }
}
