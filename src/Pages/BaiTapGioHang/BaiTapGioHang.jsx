import React, { Component } from 'react'
import DanhSanhSanPham from './DanhSanhSanPham'
import GioHang from './GioHang'

export default class BaiTapGioHang extends Component {

    state = {
        gioHang: [
            {maSP: 1, tenSP: "VinSmart Live", giaBan: 5700000, hinhAnh: "./img/vsphone.jpg", soLuong: "1"}
        ]
    }

    addToCart = (spClicked) => {
        spClicked = {...spClicked, soLuong: 1}; 


        console.log(spClicked);
        let newGioHang = this.state.gioHang; 
        // Xét spClicked có trong giỏ hàng hay chưa 
        let spGH = newGioHang.find(sp => sp.maSP === spClicked.maSP);
        if (spGH) {
          spGH.soLuong++; 
        } else {
          newGioHang.push(spClicked); 
        }

        this.setState({
            gioHang: newGioHang
        })
    }

  render() {
    return (
      <div className='container mb-5'>
        <h3 className='text-center mt-2'>Cart Exercice</h3>
        <GioHang gioHang={this.state.gioHang} />
        <DanhSanhSanPham addToCart={this.addToCart} />
      </div>
    )
  }
}
