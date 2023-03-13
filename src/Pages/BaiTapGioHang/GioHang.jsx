import React, { Component } from "react";

export default class GioHang extends Component {
  render() {
    const { gioHang } = this.props;
    // console.log(gioHang)
    return (
      <table className="table">
        <thead>
          <tr>
            <th>Code</th>
            <th>Name of Product</th>
            <th>Image</th>
            <th>Quantity</th>
            <th>Unit price</th>
            <th>Amount</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {gioHang.map((item, index) => {
            {/* console.log(item) */}
            return (
              <tr key={index}>
                <td>{item.maSP}</td>
                <td>{item.tenSP}</td>
                <td>
                  <img
                    src={item.hinhAnh}
                    width={50}
                    height={50}
                    alt="..."
                  />
                </td>
                <td>{item.soLuong}</td>
                <td>{item.giaBan.toLocaleString()}</td>
                <td>{(item.giaBan * item.soLuong).toLocaleString()}</td>
                <td>
                  <button className="btn btn-danger mx-1">
                    <i class="fa fa-trash-alt"></i>
                  </button>
                  <button className="btn btn-primary">
                    <i class="fa fa-edit"></i>
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    );
  }
}
