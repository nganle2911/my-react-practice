import React, { Component } from 'react'

export default class SanPham extends Component {
  render() {
    const {maSP, tenSP, giaBan, hinhAnh} = this.props.item; 
    const {addToCart} = this.props; 
    return (
      <div className='card'>
        <img className='w-100' src={hinhAnh} alt='...' height={420} style={{objectFit: 'cover'}} />
        <div className='card-body'>
            <h4>{tenSP}</h4>
            <p>{giaBan.toLocaleString()} VND</p>
            <button className='btn btn-primary' onClick={() => {
                addToCart(this.props.item);
            }}>
                Add to cart <i class="fa fa-cart-plus"></i>
            </button>
        </div>
      </div>
    )
  }
}
