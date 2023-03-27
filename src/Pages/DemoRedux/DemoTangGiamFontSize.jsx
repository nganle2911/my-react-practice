import React, { Component } from 'react';
import {connect} from 'react-redux';

class DemoTangGiamFontSize extends Component {
  render() {
    console.log(this.props);
    return (
      <div>
        <h3>Exercise 1: Increase / Decrease Font Size</h3>
        <p>Labore elit mollit dolor consectetur ut magna mollit culpa elit. Id magna pariatur magna voluptate tempor do ex officia cupidatat excepteur qui sit voluptate. Exercitation eu veniam reprehenderit quis qui deserunt. Sint velit minim cupidatat nulla aliqua et fugiat aliquip. Consectetur quis dolore irure cupidatat culpa reprehenderit excepteur minim irure magna. Incididunt pariatur nisi sunt sit consectetur sunt dolor ad.</p>
        <button className='btn btn-primary mx-2'>
            <i class="fa fa-plus"></i>
        </button>
        <button className='btn btn-secondary'>
            <i class="fa-solid fa-minus"></i>
        </button>
      </div>
    )
  }
}

// Định nghĩa 1 hàm lấy dự liệu redux về 
const mapStateToProps = (state) => {
  // Lấy dữ liệu của redux để biến thành props của component 
  return {
    fSize: state.fontSizeReducer
  }
}

// Kết nối react với redux => tạo ra component mới có chứa dữ liệu của redux và giao diện của component đó 
const DemoFontSizeRedux = connect(mapStateToProps)(DemoTangGiamFontSize); 

export default DemoFontSizeRedux; 





