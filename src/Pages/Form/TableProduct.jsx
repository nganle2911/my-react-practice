import React, { Component } from "react";

export default class TableProduct extends Component {
  render() {
    const {arrProduct, handleDelProduct, handleEditProduct} = this.props; 
    // console.log(arrProduct);
    return (
      <table className="table">
        <thead className="bg-dark text-white">
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Image</th>
            <th>Price</th>
            <th>Product Type</th>
            <th>Description</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {arrProduct.map((item, index) => {
            {/* console.log(item); */}
            return (
              <tr key={index}>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>
                    <img src={item.image} />
                </td>
                <td>{item.price}</td>
                <td>{item.productType}</td>
                <td>{item.description}</td>
                <td>
                  <button className="btn btn-danger" onClick={() => {
                    handleDelProduct(item.id);
                  }}>
                    <i class="fa fa-trash-alt"></i>
                  </button>
                  <button className="btn btn-primary mx-2" onClick={() => {
                    handleEditProduct(item);
                  }}>
                    <i class="fa fa-edit"></i>
                  </button>
                </td>
              </tr>
            );
          })}
          {/* <tr>
            <td>ID</td>
            <td>Name</td>
            <td>Image</td>
            <td>Price</td>
            <td>Product Type</td>
            <td>Description</td>
            <td>
                <button className="btn btn-danger">
                    <i class="fa fa-trash-alt"></i>
                </button>
                <button className="btn btn-primary mx-2">
                    <i class="fa fa-edit"></i> 
                </button>
            </td>
          </tr> */}
        </tbody>
      </table>
    );
  }
}
