import React, { useState } from 'react'
import UpdateComponent from '../UpdateComponent';

const Person1 = ({money, handleIncrease}) => {

  return (
    <div>
        <h3>Jimmy is offering ${money}</h3>
        <button className='btn btn-success' onClick={() => {
            handleIncrease(); 
        }}>Increase Money</button>
    </div>
  )
}

export default UpdateComponent(Person1)