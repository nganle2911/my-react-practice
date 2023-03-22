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
    
    formError: {
      id: "",
      name: "",
      price: "",
      image: "",
      description: ""
    }
  };

    // Hàm xử lý onSubmit cho form 
  handleSubmit = (e) => {
    // Ngăn sự kiện reload browser
    e.preventDefault();
    console.log("submit", this.state.formValue);
  };

    // Hàm xử lý input khi user nhập vào 
  handleChangeInput = (e) => {
    // let value = e.target.value; //tablet 
    // let name = e.target.name; //productType 
    let {value, name} = e.target; 
    
    // Lấy object formValue ra xử lý riêng 
    let newFormValue = this.state.formValue; 
    // Thay đổi state sau khi user nhập vào input - dùng dynamic key cho [name]
    newFormValue[name] = value; 

    /**
     * ? Execute errors for Form 
     */
    let newFormErr = this.state.formError;
    let message = "";
    if (value.trim() === "") {
      message = name + " cannot be blank !";
    }
    newFormErr[name] = message; 
    
    
    // setState 
    this.setState({
        formValue: newFormValue,
        formError: newFormErr
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
                  {this.state.formError.id ? <div className="alert alert-danger mt-2">{this.state.formError.id}</div> : ""}
                </div>
                <div className="form-group">
                  <p>Name</p>
                  <input className="form-control" name="name" onInput={this.handleChangeInput} />
                  {this.state.formError.name && <div className="alert alert-danger">{this.state.formError.name}</div>}
                </div>
                <div className="form-group">
                  <p>Price</p>
                  <input className="form-control" name="price" onInput={this.handleChangeInput} />
                  {this.state.formError.price && <div className="alert alert-danger">{this.state.formError.price}</div>}
                </div>
              </div>
              <div className="col-6">
                <div className="form-group">
                  <p>Image</p>
                  <input className="form-control" name="image" onInput={this.handleChangeInput} />
                  {this.state.formError.image && <div className="alert alert-danger">{this.state.formError.image}</div>}
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
                  {this.state.formError.description && <div className="alert alert-danger">{this.state.formError.description}</div>}
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
