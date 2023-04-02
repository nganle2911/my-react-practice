import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Modal from './Modal';

const UseEffectDemo = () => {

  const [number, setNumber] = useState(1);
  const [arrProduct, setArrProduct] = useState([
    {id: 1, name: "Product 1", image: "https://picsum.photos/id/21/200/200", price: 1000}
  ]);

  // idProductDetail 
  const [idProductDetail, setIdProductDetail] = useState(0);

  // state của product detail
  const [productDetail, setProductDetail] = useState({}); 

  const getApiProduct = async () => {
    let result = await axios({
      url: "https://shop.cyberlearn.vn/api/product",
      method: "GET"
    });
    setArrProduct(result.data.content);
  }

  const getProductDetail = async () => {
    let result = await axios({
      url: "https://shop.cyberlearn.vn/api/product/getbyid?id=" + idProductDetail,
      method: 'GET'
    });
    // Sau khi lấy dữ liệu api productDetail về thì set vào stateProductDetail 
    setProductDetail(result.data.content);
    console.log(result.data.content);
  }

  useEffect(() => {
    // Bất kỳ sự kiện nào làm state idProductDetail thay đổi thì hàm này sẽ chạy (ComponentDidUpdate mà có if)
    if (idProductDetail !== 0) {
      getProductDetail(); 
    }
  }, []);

  useEffect(() => {
    console.log('log useEffect');
    // Trường hợp 2: rất ít xài 
    // Thực thi lần đầu sau render và khi muốn bất kỳ state nào thay đổi cũng sẽ được thực thi hàm này 
    // Tương tự componentDidUpdate (bên class)
  })

  useEffect(() => {
    // Trường hợp 1: 
    // Hàm callback tham số thứ 1 sẽ chạy lần đầu tiên sau khi render, chỉ chạy 1 lần duy nhất nếu tham số thứ 2 là mảng rỗng []
    // Thường dùng để call api (Tương tự componentDidMount bên class)
    getApiProduct();
    console.log('componentDidMount');

  }, [])

  const renderProduct = () => {
    return arrProduct.map((item, index) => {
      // console.log(item)
      return <div className='col-4' key={index}>
        <div className='card'>
          <img src={item.image} alt="..." />
          <div className='card-body'>
            <p>{item.name}</p>
            <p>{item.price}</p>
            <button className='btn btn-primary' data-bs-toggle="modal" data-bs-target="#modalId">View Detail</button>
          </div>
        </div>
      </div>
    })
  }

  return (
    <div className='container'>
      <h3 className='mt-3'>Number: {number}</h3>
      <button className='btn btn-success' onClick={() => {
        setNumber(number + 1);
      }}>+</button>
      <h3 className='mt-3'>Product List</h3>
      <div className='row'>
        {renderProduct()}
      </div>
      <Modal />
    </div>
  )
}

export default UseEffectDemo