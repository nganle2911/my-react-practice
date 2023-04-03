import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Modal from './Modal';

const UseEffectDemo = () => {

    const [number, setNumber] = useState(0);
    const [arrProduct, setArrProduct] = useState([
        {id: 1, name: "brew coffee", image: "https://picsum.photos/200/200/", price: 500}
    ]);
    const [idProductDetail, setIdProductDetail] = useState(0);
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
            method: "GET"
        });
        // sau khi lấy dữ liệu api productDetail về thì set vào state ProductDetail 
        setProductDetail(result.data.content);
        // console.log(result.data.content);
    }

    // ? Trường hợp 3: param2 có tham số
    useEffect(() => {
        // Bất kỳ sự kiện nào làm state idProductDetail thay đổi -> thì hàm này sẽ chạy (giống componentDidUpdate mà có if)
        if (idProductDetail !== 0) {
            getProductDetail();
            console.log("when idProductDetail changed!");
        }
    },[idProductDetail]);

    // ? Trường hợp 2: Khi không có tham số thứ 2 
    // Thực thi lần đầu sau render & khi muốn bất kỳ state nào thay đổi, thì useEffect này cũng sẽ thay đổi theo 
    // Tương tự componentDidUpdate bên react class component 
    useEffect(() => {
        console.log('useEffect without param2');
    });

    // ? Trường hợp 1: khi tham số thứ 2 là []
    useEffect(() => {
        // Hàm callback tham số thứ 1 sẽ chạy lần đầu tiên sau khi giao diện render(), & nó chỉ chạy 1 lần duy nhất nếu tham số thứ 2 là mảng rỗng []
        // Thường dùng call API 
        getApiProduct();
        console.log("componentDidMount")

    }, []); 

    // Hàm renderProduct 
    const renderProduct = () => {
        return arrProduct.map((item, index) => {
            return <div className='col-4' key={index}>
                <div className='card'>
                    <img src={item.image} alt='...' />
                    <div className='card-body'>
                        <p>{item.name}</p>
                        <p>{item.price}$</p>
                        <button className='btn btn-primary' data-bs-toggle="modal" data-bs-target="#modalId" onClick={() => {
                            setIdProductDetail(item.id); 
                        }}>View Detail</button>
                    </div>
                </div>
            </div>
        })
    }

  return (
    <div className='container'>
        <h3 className='mt-3'>Number: {number}</h3>
        <button className='btn btn-primary' onClick={() => {
            setNumber(number + 1);
            console.log("state setNumber", number);
        }}>+</button>

        <h3 className='mt-3'>Product List</h3>
        <div className='row'>
            {renderProduct()}
        </div>

        <Modal productDetail={productDetail} />
    </div>
  )
}

export default UseEffectDemo