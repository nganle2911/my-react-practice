import React, { useState } from 'react'
import UpdateComponent from '../UpdateComponent';

const Person2 = ({money, handleIncrease}) => {

  // const [money, setMoney] = useState(10); 
  // const handleIncrease = () => {
  //   setMoney(money * 2); 
  // }

  return (
    <div>
        <h3>John is offering ${money}</h3>
        <button className='btn btn-success' onClick={() => {
          handleIncrease(); 
        }}>Increase Money</button>
    </div>
  )
}

export default UpdateComponent(Person2)
