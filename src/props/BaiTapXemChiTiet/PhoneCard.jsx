import React, { Component } from "react";

export default class PhoneCard extends Component {
  render() {
    const {item, xemChiTiet} = this.props; 
    return (
      <div className="card">
        <img
          src={item.hinhAnh}
          alt="..."
          height={450}
          style={{ objectFit: "cover" }}
          className="w-100"
        />
        <div className="card-body">
          <h4>{item.tenSP}</h4>
          <p>{item.giaBan} VND</p>
          <button className="btn btn-success" onClick={() => {
            xemChiTiet(item);
          }}>View Detail</button>
        </div>
      </div>
    );
  }
}


