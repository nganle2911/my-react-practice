import React, { Component } from 'react'
import SanPham from './SanPham';

const data = [
  {
    maSP: 1,
    tenSP: "VinSmart Live",
    manHinh: "AMOLED, 6.2, Full HD+",
    heDieuHanh: "Android 9.0 (Pie)",
    cameraTruoc: "20 MP",
    cameraSau: "Chính 48 MP & Phụ 8 MP, 5 MP",
    ram: "4 GB",
    rom: "64 GB",
    giaBan: 5700000,
    hinhAnh: "./img/vsphone.jpg",
  },
  {
    maSP: 2,
    tenSP: "Meizu 16Xs",
    manHinh: "AMOLED, FHD+ 2232 x 1080 pixels",
    heDieuHanh: "Android 9.0 (Pie); Flyme",
    cameraTruoc: "20 MP",
    cameraSau: "Chính 48 MP & Phụ 8 MP, 5 MP",
    ram: "4 GB",
    rom: "64 GB",
    giaBan: 7600000,
    hinhAnh: "./img/meizuphone.jpg",
  },
  {
    maSP: 3,
    tenSP: "Iphone XS Max",
    manHinh: "OLED, 6.5, 1242 x 2688 Pixels",
    heDieuHanh: "iOS 12",
    cameraSau: "Chính 12 MP & Phụ 12 MP",
    cameraTruoc: "7 MP",
    ram: "4 GB",
    rom: "64 GB",
    giaBan: 27000000,
    hinhAnh: "./img/applephone.jpg",
  },
  {
    maSP: 4,
    tenSP: "Blackberry Phone",
    manHinh: "AMOLED, 5.2, Full HD+",
    heDieuHanh: "Android 8.0 (Pie)",
    cameraTruoc: "20 MP",
    cameraSau: "Chính 48 MP & Phụ 8 MP, 5 MP",
    ram: "5 GB",
    rom: "128 GB",
    giaBan: 18200000,
    hinhAnh: "./img/sp_blackberry.png",
  },
  {
    maSP: 5,
    tenSP: "Note 7",
    manHinh: "AMOLED, 6.2, Full HD+",
    heDieuHanh: "Android 9.0 (Pie)",
    cameraTruoc: "20 MP",
    cameraSau: "Chính 48 MP & Phụ 8 MP, 5 MP",
    ram: "4 GB",
    rom: "256 GB",
    giaBan: 48500000,
    hinhAnh: "./img/sp_note7.png",
  },
  {
    maSP: 6,
    tenSP: "Vivo 850",
    manHinh: "AMOLED, 6.2, Full HD+",
    heDieuHanh: "Android 9.0 (Pie)",
    cameraTruoc: "20 MP",
    cameraSau: "Chính 48 MP & Phụ 8 MP, 5 MP",
    ram: "4 GB",
    rom: "128 GB",
    giaBan: 25450000,
    hinhAnh: "./img/sp_vivo850.png",
  },
];

export default class DanhSanhSanPham extends Component {

    renderPhone = () => {
        const arrPhone = data.map((item, index) => {
            // console.log(item); 
            return <div className='col-4 mt-3' key={index}>
                <SanPham item={item} />
            </div>
        })
        return arrPhone; 
    }

  render() {
    return (
      <div className='row'>
        {this.renderPhone()}
        {/* <div className='col-4'>
            <SanPham />
        </div>
        <div className='col-4'>
            <SanPham />
        </div>
        <div className='col-4'>
            <SanPham />
        </div> */}
      </div>
    )
  }
}
