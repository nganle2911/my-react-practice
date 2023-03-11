import React, { Component } from "react";
import Article from "./Article";
import CardProduct from "./CardProduct";

export default class DemoProps extends Component {

  data = {
    title: "Can we bind data as an object through this.props() ?",
    content: "Yes, we can bind data as an object through this.props() !!!"
  }

  render() {
    return (
      <div className="container mt-2">
        <h3>Product List</h3>
        <div className="row">
          <div className="col-4">
            <CardProduct id="510" name="Iphone 10" price="1000" />
          </div>
          <div className="col-4">
            <CardProduct id="521" name="Iphone 14" price="2500" />
          </div>
          <div className="col-4">
            <CardProduct id="527" name="Iphone XS" price="2100" />
          </div>
        </div>

        <hr />
        <h3>Blogs</h3>
        <Article data={this.data} button={<button className="btn btn-primary">Detail</button>} />
      </div>
    );
  }
}


const myElement = <Hello name="Kim-Ngan" age="29"/>


function Hello() {
  const {name, age} = this.props;
  return <div>
    <h4>Hello, {name}</h4>
    <p>She is {age}</p>
  </div>
}



