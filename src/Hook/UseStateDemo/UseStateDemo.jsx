// rafce - react arrow function export component 
import React, { useState } from 'react'

// Đây là function component => Không có con trỏ this (cũng không có state & props như trong react class component)
const UseStateDemo = () => {

  let [number, setNumber] = useState(10); // useState returns 1 mảng như sau: [state, setState()]
  // console.log("number", number);

  let [fontSize, setFontSize] = useState(16); 

  const handleChangeFontSize = (fSize) => {
    let newFontSize = fontSize + fSize;
    // setState thì giá trị mới thay thế hoàn toàn giá trị cũ => render lại 
    setFontSize(newFontSize); 
  }

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

      <hr />

      <h3>Exercise 2: Increase / Decrease Font Size</h3>
      <p style={{fontSize: fontSize}}>Voluptate ipsum irure est cillum aliquip consectetur. Ullamco commodo anim irure eiusmod sit dolor eu non dolor fugiat labore esse eu nulla. Pariatur aliquip in duis ullamco ea ullamco voluptate dolore in Lorem. Justo amet diam lorem amet eirmod duo dolores stet, ea ut magna accusam diam amet rebum sit takimata justo, lorem.</p>
      <button className='btn btn-primary mx-2' onClick={() => {
        handleChangeFontSize(1); 
      }}>+</button>
      <button className='btn btn-primary' onClick={() => {
        handleChangeFontSize(-1);
      }}>-</button>
    </div>
  )
}

export default UseStateDemo