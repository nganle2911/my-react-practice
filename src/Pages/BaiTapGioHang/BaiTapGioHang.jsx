import React, { Component } from 'react'
import DanhSanhSanPham from './DanhSanhSanPham'
import GioHang from './GioHang'

export default class BaiTapGioHang extends Component {

    state = {
        gioHang: [
            {maSP: 1, tenSP: "Iphone X", giaBan: 1500, hinhAnh: './img/sp_iphoneX.png', soLuong: 3}
        ]
    }

  render() {
    return (
      <div className='container mb-5'>
        <h3 className='text-center mt-2'>Cart Exercice</h3>
        <GioHang gioHang={this.state.gioHang} />
        <DanhSanhSanPham />
      </div>
    )
  }
}
