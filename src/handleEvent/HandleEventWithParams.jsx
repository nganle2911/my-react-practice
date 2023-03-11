import React, { Component } from 'react'

export default class HandleEventWithParams extends Component {

  printMyDog = (name, age) => {
    console.log("My dog is " + name + " and she is " + age + " years old.");
  };

  buttonWithBind = (name) => {
    console.log("Welcome " + name + " to React class !!!");
  }

  render() {
    return (
      <div className="container">
        <button
          className="btn btn-warning text-success"
          onClick={() => {
            this.printMyDog("Lucky", 12);
          }}
        >
          I have two params. Click me !!!
        </button>

        <br /> <br />
        <button className='btn btn-secondary' onClick={this.buttonWithBind.bind(this, "Kim-Ngan")}>Using bind method. Click me !!!</button>
      </div>
    );
  }
}
