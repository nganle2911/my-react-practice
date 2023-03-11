import React, { Component } from 'react'

export default class CardProduct extends Component {
  render() {
    // this.props(): thuộc tính có sẵn của react class component, dùng để nhận các giá trị từ component cha truyền vào, và không thể gán lại giá trị ở component con 

    // Using destructuring assignment 
    let {id, name, price} = this.props; 
    return (
      <div className='card'>
        <img src={`https://picsum.photos/id/${id}/300/300`} alt='...' />
        <div className='card-body'>
            <h3>{name}</h3>
            <p>{price}</p>
            <button className='btn btn-dark'>Add to cart</button>
        </div>
      </div>
    )
  }
}


