import React, { useState } from 'react'

const Person1 = () => {

    const [money, setMoney] = useState(10); 

  return (
    <div>
        <h3>Jimmy is offering ${money}</h3>
        <button className='btn btn-success' onClick={() => {
            
        }}>Increase Money</button>
    </div>
  )
}

export default Person1