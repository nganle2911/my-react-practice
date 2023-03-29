import React, { Component } from 'react'
import BaiTapChonXe from './BaiTapChonXe'
import BaiTapQuanLyUsers from './BaiTapQuanLyUser/BaiTapQuanLyUsers'
import DemoTangGiamFontSize from './DemoTangGiamFontSize'

export default class DemoRedux extends Component {
  render() {
    return (
      <div className='container mt-3'>
        <DemoTangGiamFontSize />
        <hr />
        <BaiTapChonXe />
        <hr />
        <BaiTapQuanLyUsers />
      </div>
    )
  }
}
