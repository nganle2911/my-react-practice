import React, { useCallback, useState } from 'react'
import Comment from './Comment';

// dữ liệu không thay đổi 
// dữ liệu thay đổi là state (đặt trong state)
const arr = []; 

export const UseCallbackDemo = () => {

    let [like, setLike] = useState(1); 
    let [number, setNumber] = useState(1); 

    const renderLike = () => {
        console.log("render like");
        return `You liked ${like} times`;
    }

    // cache lại hàm renderLike 
    /**
     * useCallback : dùng để cache lại địa chỉ của 1 hàm, nếu hàm đó còn tạo lại (thay đổi địa chỉ) dựa vào state nào đó thì truyền state đó vào dependency tham số 2 của useCallback 
     */
    const callbackRenderLike = useCallback(renderLike, [like]);

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
        <Comment like={like} renderLike={callbackRenderLike} />
    </div>
  )
}
