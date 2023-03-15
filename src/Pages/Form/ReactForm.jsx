import React, { Component } from "react";

export default class ReactForm extends Component {
    
  state = {
    formValue: {
      id: "",
      name: "",
      price: "",
      image: "",
      productType: "phone", //luôn để giá trị mặc định là option đầu tiên
      description: "",
    },
  };

  handleSubmit = (e) => {
    // Ngăn sự kiện reload browser
    e.preventDefault();
    console.log("submit");
  };

  render() {
    return (
      <form className="container" onSubmit={this.handleSubmit}>
        <h3>Create Product</h3>
        <div className="card">
          <div className="card-header">Product Info</div>
          <div className="card-body">
            <div className="row">
              <div className="col-6">
                <div className="form-group">
                  <p>ID</p>
                  <input className="form-control" name="id" />
                </div>
                <div className="form-group">
                  <p>Name</p>
                  <input className="form-control" name="name" />
                </div>
                <div className="form-group">
                  <p>Price</p>
                  <input className="form-control" name="price" />
                </div>
              </div>
              <div className="col-6">
                <div className="form-group">
                  <p>Image</p>
                  <input className="form-control" name="image" />
                </div>
                <div className="form-group">
                  <p>Product Type</p>
                  <select name="productType" className="form-control">
                    <option value={"phone"}>phone</option>
                    <option value={"tablet"}>tablet</option>
                    <option value={"laptop"}>laptop</option>
                  </select>
                </div>
                <div className="form-group">
                  <p>Description</p>
                  <input className="form-control" name="description" />
                </div>
              </div>
            </div>
          </div>
          <div className="card-footer">
            <button className="btn btn-success m-2" type="submit">
              Create
            </button>
          </div>
        </div>
      </form>
    );
  }
}
