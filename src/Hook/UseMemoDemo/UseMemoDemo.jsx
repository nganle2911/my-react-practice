import React, { useMemo, useState } from 'react'
import Cart from './Cart';

// Cách 1: Đặt biến ra ngoài phạm vi UseMeMoDemo 
// let cart = [
//     {id: 1, name: "iphone", price: 1000},
//     {id: 2, name: "samsung", price: 1500},
//     {id: 3, name: "nokia", price: 800}
// ];

export const UseMemoDemo = () => {

    let [like, setLike] = useState(1); 
    let cart = [
        {id: 1, name: "iphone", price: 1000},
        {id: 2, name: "samsung", price: 1500},
        {id: 3, name: "nokia", price: 800}
    ];

    // Cách 2: Cache biến "cart" bằng Hook useMemo()
    const cartMemo = useMemo(() => cart, []); 

  return (
    <div className='m-5'>
        Like: {like} ♥
        <br />
        <span style={{cursor: "pointer", color: 'red', fontSize: 35, borderStyle: "dashed"}} onClick={() =>  {
            setLike(like + 1);
        }}>♥</span>
        <br />
        <br />
        <Cart cart={cartMemo} />
    </div>
  )
}
