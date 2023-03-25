import React, { Component } from "react";
import TableProduct from "./TableProduct";
import axios from "axios";

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
    valid: false, //form invalid 

    arrProduct: [
      {id: "1", name: "iphone X", image: "https://picsum.photos/id/237/50/50", price: 1000, productType: "phone", description: "product 1"},
      {id: "2", name: "iphone XS", image: "https://picsum.photos/id/152/50/50", price: 2000, productType: "phone", description: "product 2"},
      {id: "3", name: "samSung X", image: "https://picsum.photos/id/252/50/50", price: 2500, productType: "tablet", description: "product 3"}
    ],
  };

  handleEditProduct = (prodClicked) => {
    // console.log(prodClicked);
    // Click vào product nào thì state của formValue sẽ được thay đổi giá trị thành product đó 
    this.setState({
      formValue : prodClicked
    }, () => {
      this.setState({
        valid: this.checkFormValid()
      })
    })
  }

  handleUpdateProduct = () => {
    // console.log("abc");
    // Tìm ra sản phẩm chứa mã tương đương formValue.id 
    let {arrProduct, formValue} = this.state;
    let prodUpdated = arrProduct.find(prod => prod.id === formValue.id);  

    if (prodUpdated) {
      // prodUpdated.name = formValue.name;
      for (let key in prodUpdated) {
        if (key !== "id") {
          prodUpdated[key] = formValue[key];
        }
      } 
    }

    this.setState({
      arrProduct: arrProduct
    })
  }

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
        return false; 
      } 
    }
    return true; 
  }

  // Hàm xử lý onSubmit cho form 
  handleSubmit = (e) => {
    // Ngăn sự kiện reload browser
    e.preventDefault();
    if (!this.checkFormValid()) {
      alert("Form is invalid !"); 
      return ; //nếu form ko hợp lệ => không submit 
    }

    // Thêm sản phẩm vào arrProduct => cập nhật state arrProduct
    let arrProduct = this.state.arrProduct; 
    let newProduct = {...this.state.formValue}; 
    arrProduct.push(newProduct); 
    this.setState({
      arrProduct: arrProduct
    })

    // console.log("submit", this.state.formValue);
  };

  handleDelProduct = (idClicked) => {
    // Lấy ra các sản phẩm có mã khác sản phẩm mình xoá 
    let arrProduct = this.state.arrProduct.filter(prod => prod.id !== idClicked); 

    this.setState({
      arrProduct: arrProduct
    })
  }

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
    let {formValue} = this.state; 
    return (
      <>
        <form className="container" onSubmit={this.handleSubmit}>
          <h3>Create Product</h3>
          <div className="card">
            <div className="card-header">Product Info</div>
            <div className="card-body">
              <div className="row">
                <div className="col-6">
                  <div className="form-group">
                    <p>ID</p>
                    <input
                      className="form-control"
                      name="id"
                      value={formValue.id}
                      data-maxlength={"6"}
                      onInput={this.handleChangeInput}
                    />
                    {this.state.formError.id ? (
                      <div className="alert alert-danger mt-2">
                        {this.state.formError.id}
                      </div>
                    ) : (
                      ""
                    )}
                  </div>
                  <div className="form-group">
                    <p>Name</p>
                    <input
                      className="form-control"
                      name="name"
                      value={formValue.name}
                      datatype="fullname"
                      onInput={this.handleChangeInput}
                    />
                    {this.state.formError.name && (
                      <div className="alert alert-danger">
                        {this.state.formError.name}
                      </div>
                    )}
                  </div>
                  <div className="form-group">
                    <p>Price</p>
                    <input
                      className="form-control"
                      name="price"
                      value={formValue.price}
                      datatype="number"
                      onInput={this.handleChangeInput}
                    />
                    {this.state.formError.price && (
                      <div className="alert alert-danger">
                        {this.state.formError.price}
                      </div>
                    )}
                  </div>
                </div>
                <div className="col-6">
                  <div className="form-group">
                    <p>Image</p>
                    <input
                      className="form-control"
                      name="image"
                      value={formValue.image}
                      onInput={this.handleChangeInput}
                    />
                    {this.state.formError.image && (
                      <div className="alert alert-danger">
                        {this.state.formError.image}
                      </div>
                    )}
                  </div>
                  <div className="form-group">
                    <p>Product Type</p>
                    <select
                      name="productType"
                      className="form-control"
                      value={formValue.productType}
                      onInput={this.handleChangeInput}
                    >
                      <option value={"phone"}>phone</option>
                      <option value={"tablet"}>tablet</option>
                      <option value={"laptop"}>laptop</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <p>Description</p>
                    <input
                      className="form-control"
                      name="description"
                      value={formValue.description}
                      onInput={this.handleChangeInput}
                    />
                    {this.state.formError.description && (
                      <div className="alert alert-danger">
                        {this.state.formError.description}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
            <div className="card-footer">
              <button
                className="btn btn-success m-2"
                disabled={!this.state.valid}
                type="submit"
              >
                Create
              </button>
              <button 
                className="btn btn-warning mx-2"
                disabled={!this.state.valid}
                onClick={() => {
                  this.handleUpdateProduct()
                }}
                >
                  Update
              </button>
            </div>
          </div>
        </form>
        <div className="container mt-2">
          <TableProduct arrProduct={this.state.arrProduct} handleDelProduct={this.handleDelProduct} handleEditProduct={this.handleEditProduct} />
        </div>
      </>
    );
  }


  componentDidMount() {
    // Gọi API sau khi render thực thi thành công (tại sao gọi ở DidMount vì DidMount chỉ chạy 1 lần duy nhất sau khi render)
    let promise = axios({
      url: "http://svcy.myclass.vn/api/Product/GetAll",
      method: "GET"
    });

    promise.then(result => {
      this.setState({
        arrProduct: result.data 
      })
    })
  }
}
