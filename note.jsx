import React, { useState } from 'react'

const note = () => {
  let [number, setNumber] = useState(10);
  let [fontSize, setFontSize] = useState(16); 

  const handleChangeFontSize = (fSize) => {
    let newFontSize = fontSize + fSize;
    setFontSize(newFontSize); 
  }

  return (
    <div className='container'>
      <h3>Exercise 1: Increase / Decrease Number</h3>
      <p style={{fontSize: fontSize}}>Reprehenderit aute amet et adipisicing amet ex nostrud nostrud laborum ullamco culpa aliquip.</p>
      <button className='btn btn-primary mx-2' onClick={() => {
        handleChangeFontSize(5); 
      }}>+</button>
      <button className='btn btn-primary' onClick={() => {
        handleChangeFontSize(-5);
      }}>-</button>
    </div>
  )
}

export default note
