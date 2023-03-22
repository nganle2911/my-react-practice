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
    },
    // Create a state for form submit 
    valid: true //form invalid 
  };

  // check formValid 
  checkFormValid = () => {
    // return true | false: true khi form không hợp lệ, false khi form hợp lệ 
    /**
     * Form hợp lệ khi: Các trường formError = rỗng, và các trường value tương ứng phải khác rỗng 
     */

    // Kiểm tra từng thuộc tính trong state.formError phải hợp lệ (= rỗng)
    let {formError, formValue} = this.state; 
    for (let key in formError) {
      if (formError[key] !== "" || formValue[key] === "") {
        return true; 
      } 
    }
    return false; 
  }

  // Hàm xử lý onSubmit cho form 
  handleSubmit = (e) => {
    // Ngăn sự kiện reload browser
    e.preventDefault();
    console.log("submit", this.state.formValue);
  };

    // Hàm xử lý input khi user nhập vào 
  handleChangeInput = (e) => { 
    let {value, name} = e.target; 
    let dataType = e.target.getAttribute("datatype"); 
    let dataMaxLen = e.target.getAttribute("data-maxlength"); 

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
    } else {
      // regex number 
      if (dataType == "number") {
        let regexNum = /^\d+(,\d{1,2})?$/; 
        if (!regexNum.test(value)) {
          message = name + " is invalid !"; 
        }
      }

      // regex name 
      if (dataType == "fullname") {
        let regexName =
          /^[a-zA-ZÀÁÂÃÈÉÊÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶẸẺẼỀỀỂẾưăạảấầẩẫậắằẳẵặẹẻẽềềểếỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹ\s\W|_]+$/g;
        if (!regexName.test(value)) {
          message = name + " is invalid !";
        }
      }

      // data max length
      if (dataMaxLen !== null && value.length > dataMaxLen) {
        message = name + ` has only maximum ${dataMaxLen} characters !`;
      }
     
    }

    newFormErr[name] = message; 
    

    // setState 
    this.setState({
        formValue: newFormValue,
        formError: newFormErr
    }, () => {

        // Gọi hàm check lỗi sau mỗi lần cập nhật value và error từ người dùng nhập
        this.setState({
          valid: this.checkFormValid()
        }) 
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
                  <input className="form-control" name="id" data-maxlength={"6"} onInput={this.handleChangeInput} />
                  {this.state.formError.id ? <div className="alert alert-danger mt-2">{this.state.formError.id}</div> : ""}
                </div>
                <div className="form-group">
                  <p>Name</p>
                  <input className="form-control" name="name" datatype="fullname" onInput={this.handleChangeInput} />
                  {this.state.formError.name && <div className="alert alert-danger">{this.state.formError.name}</div>}
                </div>
                <div className="form-group">
                  <p>Price</p>
                  <input className="form-control" name="price" datatype="number" onInput={this.handleChangeInput} />
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
            <button className="btn btn-success m-2" disabled={this.state.valid} type="submit">
              Create
            </button>
          </div>
        </div>
      </form>
    );
  }
}
