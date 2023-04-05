import React, { useState } from 'react'
import Comment from './Comment';

export const UseCallbackDemo = () => {

    let [like, setLike] = useState(1); 
    let [number, setNumber] = useState(1); 

  return (
    <div className='m-5'>
        <p>Number: {number}</p>
        <button className='btn btn-success' onClick={() => {
            setNumber(number + 1);
        }}>+</button>
        <br />
        <br />
        
        Like: {like} ♥
        <br />
        <span style={{cursor: 'pointer', color: 'red', fontSize: 35, borderStyle: 'dotted'}} onClick={() => {
            setLike(like + 1);
        }}>♥</span>
        <br />
        <br />
        <Comment like={like} />
    </div>
  )
}
