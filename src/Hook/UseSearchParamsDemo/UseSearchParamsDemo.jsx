import React, { useRef } from 'react'
import { NavLink, useSearchParams } from 'react-router-dom'

const UseSearchParamsDemo = () => {

    const [searchParams, setSearchParams] = useSearchParams(); 
    const keyword = useRef(''); 

    const handleSubmit = (e) => {
        e.preventDefault();

        // Hàm đưa tham số lên url tại trang này 
        setSearchParams({
            keyword: keyword.current
        })
    }

    const handleChange = (e) => {
        keyword.current = e.target.value; 
        // console.log(keyword.current);
    }

  return (
    <div className='container'>
        <form onSubmit={handleSubmit}>
            <h5 className='mt-3'>Input Keywords</h5>
            <input className='form-control' name='keyword' onChange={handleChange} />
        </form>
        <div className='mt-3'>
            <h3>Search Result</h3>
            <div className='row'>
                <div className='col-3'>
                    <div className='card'>
                        <img src='https://i.pravatar.cc?u=1' alt='...' />
                        <div className='card-body'>
                            <p>Name</p>
                            <p>Price</p>
                            <NavLink className="btn btn-primary" to={`/detail`}>View Detail</NavLink>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default UseSearchParamsDemo