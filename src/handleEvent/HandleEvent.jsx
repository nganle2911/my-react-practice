import React, { Component } from 'react'

export default class HandleEvent extends Component {

    handleClickMe = (e) => {
        let tag = e.target;
        tag.innerHTML = "Touched !!!";
        tag.style.color = "blue";
        tag.style.backgroundColor = "orange"; 
    }

    sayHello = (name) => {
        alert ("Hello " + name); 
    }

  render() {
    return (
      <div className='container'>
        <button className='btn btn-success' onClick={(event) => {
            // Lấy ra thẻ từ biến "event": event.target sẽ là thẻ xãy ra sự kiện
            let tag = event.target;
            console.log(tag);
            tag.innerHTML = "Clicked !!!";
            tag.style.color = "red";

            // alert("Hello World !!!"); 
            this.sayHello("Van-Khoa"); 
        }}>Click me !!!</button>
        <hr />
        <button className='btn btn-primary' onClick={this.handleClickMe}>Touche me !!!</button>
      </div>
    )
  }
}

