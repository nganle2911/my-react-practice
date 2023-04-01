// rafce - react arrow function export component 
import React, { useState } from 'react'

// Đây là function component => Không có con trỏ this (cũng không có state & props như trong react class component)
const UseStateDemo = () => {

  let [number, setNumber] = useState(10); // useState returns 1 mảng như sau: [state, setState()]
  // console.log("number", number);

  return (
    <div className='container mt-3'>
      <h3>Exercise 1: Increase / Decrease Number</h3>
      <p>Number : {number}</p>
      <button className='btn btn-success mx-2' onClick={() => {
        number += 1; 
        // Hàm setState() sẽ nhận vào state mới thay thế state cũ, đồng thời render lại function 
        setNumber(number);
      }}>+</button>
      <button className='btn btn-success' onClick={() => {
        number -= 1;
        setNumber(number);
      }}>-</button>
    </div>
  )
}

export default UseStateDemo