import React, { Component } from 'react'
import PhoneCard from './PhoneCard'

const data = [
    {
      "maSP": 1,
      "tenSP": "VinSmart Live",
      "manHinh": "AMOLED, 6.2, Full HD+",
      "heDieuHanh": "Android 9.0 (Pie)",
      "cameraTruoc": "20 MP",
      "cameraSau": "Chính 48 MP & Phụ 8 MP, 5 MP",
      "ram": "4 GB",
      "rom": "64 GB",
      "giaBan": 5700000,
      "hinhAnh": "./img/vsphone.jpg"
    },
    {
      "maSP": 2,
      "tenSP": "Meizu 16Xs",
      "manHinh": "AMOLED, FHD+ 2232 x 1080 pixels",
      "heDieuHanh": "Android 9.0 (Pie); Flyme",
      "cameraTruoc": "20 MP",
      "cameraSau": "Chính 48 MP & Phụ 8 MP, 5 MP",
      "ram": "4 GB",
      "rom": "64 GB",
      "giaBan": 7600000,
      "hinhAnh": "./img/meizuphone.jpg"
    },
    {
      "maSP": 3,
      "tenSP": "Iphone XS Max",
      "manHinh": "OLED, 6.5, 1242 x 2688 Pixels",
      "heDieuHanh": "iOS 12",
      "cameraSau": "Chính 12 MP & Phụ 12 MP",
      "cameraTruoc": "7 MP",
      "ram": "4 GB",
      "rom": "64 GB",
      "giaBan": 27000000,
      "hinhAnh": "./img/applephone.jpg"
    }, 
    {
      "maSP": 4,
      "tenSP": "Blackberry Phone",
      "manHinh": "AMOLED, 5.2, Full HD+",
      "heDieuHanh": "Android 8.0 (Pie)",
      "cameraTruoc": "20 MP",
      "cameraSau": "Chính 48 MP & Phụ 8 MP, 5 MP",
      "ram": "5 GB",
      "rom": "128 GB",
      "giaBan": 18200000,
      "hinhAnh": "./img/sp_blackberry.png"
    },
    {
      "maSP": 5,
      "tenSP": "Note 7",
      "manHinh": "AMOLED, 6.2, Full HD+",
      "heDieuHanh": "Android 9.0 (Pie)",
      "cameraTruoc": "20 MP",
      "cameraSau": "Chính 48 MP & Phụ 8 MP, 5 MP",
      "ram": "4 GB",
      "rom": "256 GB",
      "giaBan": 48500000,
      "hinhAnh": "./img/sp_note7.png"
    },
    {
      "maSP": 6,
      "tenSP": "Vivo 850",
      "manHinh": "AMOLED, 6.2, Full HD+",
      "heDieuHanh": "Android 9.0 (Pie)",
      "cameraTruoc": "20 MP",
      "cameraSau": "Chính 48 MP & Phụ 8 MP, 5 MP",
      "ram": "4 GB",
      "rom": "128 GB",
      "giaBan": 25450000,
      "hinhAnh": "./img/sp_vivo850.png"
    }
]
  
export default class BaiTapXemChiTiet extends Component {

    state = {
        spChiTiet: { //state is an object 
            "maSP": 1,
            "tenSP": "VinSmart Live",
            "manHinh": "AMOLED, 6.2, Full HD+",
            "heDieuHanh": "Android 9.0 (Pie)",
            "cameraTruoc": "20 MP",
            "cameraSau": "Chính 48 MP & Phụ 8 MP, 5 MP",
            "ram": "4 GB",
            "rom": "64 GB",
            "giaBan": 5700000,
            "hinhAnh": "./img/vsphone.jpg"
        } 
    }

    renderProduct = () => {
        const arrPhone = data.map((item, index) => {
            // console.log(item); 
            return (<div className='col-4 mb-5'>
                <PhoneCard item={item} xemChiTiet={this.xemChiTiet} />
        </div>)
        })
        return arrPhone; 
    }

    xemChiTiet = (phoneClicked) => {
        // console.log(phoneClicked)
        this.setState({
            spChiTiet: phoneClicked
        })
    }

  render() {
    // console.log(this.state.spChiTiet); 
    const {maSP, tenSP, manHinh, heDieuHanh, cameraTruoc, cameraSau, ram, rom, giaBan, hinhAnh} = this.state.spChiTiet; 
    // console.log(tenSP)
    return (
      <div className='container'>
        <h2 className='mt-2'>Product List</h2>
        <div className='row'>
            {this.renderProduct()}
            {/* <div className='col-4'>
                <div className='card'>
                <img src='./img/vsphone.jpg' alt='...' height={450} style={{objectFit: 'cover'}} className="w-100" />
                <div className='card-body'>
                    <h4>Title</h4>
                    <p>Price</p>
                    <button className='btn btn-success'>View Detail</button>
                </div>
                </div>
            </div> */}
        </div>

        <div className='row'>
            <div className='col-4'>
                <h3>{tenSP}</h3>
                <img src={hinhAnh} alt='...' className='w-100' />
            </div>
            <div className='col-8'>
                <h3>Specifications</h3>
                <table className='table mt-3'>
                    <tbody>
                        <tr>
                            <td>Screen</td>
                            <td>{manHinh}</td>
                        </tr>
                        <tr>
                            <td>Operating System</td>
                            <td>{heDieuHanh}</td>
                        </tr>
                        <tr>
                            <td>Front Camera</td>
                            <td>{cameraTruoc}</td>
                        </tr>
                        <tr>
                            <td>Back Camera</td>
                            <td>{cameraSau}</td>
                        </tr>
                        <tr>
                            <td>RAM</td>
                            <td>{ram}</td>
                        </tr>
                        <tr>
                            <td>ROM</td>
                            <td>{rom}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
      </div>
    )
  }
}
