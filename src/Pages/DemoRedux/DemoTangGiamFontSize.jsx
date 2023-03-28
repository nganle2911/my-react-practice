import React, { Component } from 'react';
import {connect} from 'react-redux';

class DemoTangGiamFontSize extends Component {
  render() {
    console.log(this.props);
    return (
      <div>
        <h3>Exercise 1: Increase / Decrease Font Size</h3>
        <p style={{fontSize: this.props.fSize}}>Labore elit mollit dolor consectetur ut magna mollit culpa elit. Id magna pariatur magna voluptate tempor do ex officia cupidatat excepteur qui sit voluptate. Exercitation eu veniam reprehenderit quis qui deserunt. Sint velit minim cupidatat nulla aliqua et fugiat aliquip. Consectetur quis dolore irure cupidatat culpa reprehenderit excepteur minim irure magna. Incididunt pariatur nisi sunt sit consectetur sunt dolor ad.</p>
        <button className='btn btn-primary mx-2' onClick={() => {
          // Tại nút xử lý => tạo object action 
          const action = {
            type: 'TANG_GIAM_FONT_SIZE',
            payload: 1
          }
          // Gửi dữ liệu lên Redux = this.props.dispatch 
          this.props.dispatch(action); 
        }}>
            <i class="fa fa-plus"></i>
        </button>
        <button className='btn btn-secondary' onClick={() => {
          const action = {
            type: 'TANG_GIAM_FONT_SIZE',
            payload: -1
          }
          this.props.dispatch(action); 
        }}>
            <i class="fa-solid fa-minus"></i>
        </button>
      </div>
    )
  }
}

// Định nghĩa 1 hàm lấy dự liệu redux về 
// Cach viet 1 
// const mapStateToProps = (state) => { //rootState : state tổng của ứng dụng 
//   // Lấy dữ liệu của redux để biến thành props của component 
//   return {
//     fSize: state.fontSizeReducer
//   }
// }
// {return} <=> () - Cach viet 2 
const mapStateToProps = (state) => ({
  fSize: state.fontSizeReducer
})

// Kết nối react với redux => tạo ra component mới có chứa dữ liệu của redux và giao diện của component đó 
const DemoFontSizeRedux = connect(mapStateToProps)(DemoTangGiamFontSize); 

export default DemoFontSizeRedux; 





