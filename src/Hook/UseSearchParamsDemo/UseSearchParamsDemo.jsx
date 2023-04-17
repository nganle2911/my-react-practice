import axios from 'axios';
import React, { useEffect, useRef, useState } from 'react'
import { NavLink, useSearchParams } from 'react-router-dom'

const UseSearchParamsDemo = () => {

    const [searchParams, setSearchParams] = useSearchParams(); 
    const [arrProduct, setArrProduct] = useState([]);
    const inputRef = useRef(''); 

    const getProductApi = async () => {
      let keyWord = searchParams.get("tuKhoa");
      let result = await axios({
        url: `https://shop.cyberlearn.vn/api/Product?keyword=${keyWord}`,
        method: "GET",
      });

      setArrProduct(result.data.content);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Hàm đưa tham số lên url tại trang này 
        setSearchParams({
            tuKhoa: inputRef.current
        })
    }

    const handleChange = (e) => {
        inputRef.current = e.target.value; 
        // console.log(keyword.current);
    }

    useEffect(() => {
        // Keyword thay đổi thì mới chạy hàm này (lần đầu tiên không có keyword => null nên không chạy)
        if(searchParams.get('tuKhoa')) {
            // console.log('call api');
            getProductApi(); 
        }
    }, [searchParams.get('tuKhoa')]);

  return (
    <div className='container'>
        <form onSubmit={handleSubmit}>
            <h5 className='mt-3'>Input Keywords</h5>
            <input className='form-control' name='keyword' onChange={handleChange} />
        </form>
        <div className='mt-3'>
            <h3>Search Result</h3>
            <div className='row'>
                {arrProduct.map((item, index) => {
                    return (
                      <div className="col-3" key={index}>
                        <div className="card">
                          <img src={item.image} alt="..." />
                          <div className="card-body">
                            <p>{item.name}</p>
                            <p>{item.price}$</p>
                            <NavLink className="btn btn-primary" to={`/detail`}>
                              View Detail
                            </NavLink>
                          </div>
                        </div>
                      </div>
                    );
                })}
            </div>
        </div>
    </div>
  )
}

export default UseSearchParamsDemo