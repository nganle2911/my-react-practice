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

    // Hàm xử lý obSutmit cho form 
  handleSubmit = (e) => {
    // Ngăn sự kiện reload browser
    e.preventDefault();
    console.log("submit");
  };

    // Hàm xử lý input khi user nhập vào 
  handleChangeInput = (e) => {
    let value = e.target.value; 
    let name = e.target.name; 
    
    // Lấy object formValue ra xử lý riêng 
    let newFormValue = this.state.formValue; 
    // Thay đổi state sau khi user nhập vào input - dùng dynamic key cho [name]
    newFormValue[name] = value; 
    // setState 
    this.setState({
        formValue: newFormValue
    }, () => {
        console.log(this.state); 
    })

    console.log(name, value);
  }

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
                  <input className="form-control" name="id" onInput={this.handleChangeInput} />
                </div>
                <div className="form-group">
                  <p>Name</p>
                  <input className="form-control" name="name" onInput={this.handleChangeInput} />
                </div>
                <div className="form-group">
                  <p>Price</p>
                  <input className="form-control" name="price" onInput={this.handleChangeInput} />
                </div>
              </div>
              <div className="col-6">
                <div className="form-group">
                  <p>Image</p>
                  <input className="form-control" name="image" onInput={this.handleChangeInput} />
                </div>
                <div className="form-group">
                  <p>Product Type</p>
                  <select name="productType" className="form-control" onInput={this.handleChangeInput}>
                    <option value={"phone"}>phone</option>
                    <option value={"tablet"}>tablet</option>
                    <option value={"laptop"}>laptop</option>
                  </select>
                </div>
                <div className="form-group">
                  <p>Description</p>
                  <input className="form-control" name="description" onInput={this.handleChangeInput} />
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
