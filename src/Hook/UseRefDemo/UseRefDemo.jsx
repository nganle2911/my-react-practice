import React, { useState } from 'react'

const UseRefDemo = () => {

    const [arrComment, setArrComment] = useState([]);
    const [comment, setComment] = useState("");

    const handleChange = (e) => {
        const {value} = e.target; 
        setComment(value);
    }

    const handleSubmit = (e) => {
        e.preventDefault(); 
        arrComment.push(comment);
    }

  return (
    <div className='container'>
        <h3 className='mt-3'>Demo useRef</h3>
        {arrComment.map((item, index) => {
            return <p className='p-2 bg-light mt-2' key={index}>
                {item}
            </p>
        })}
        
        <form className='form-group' onSubmit={handleSubmit}>
            <input id='comment' className='form-control' onInput={handleChange} />
            <button className='btn btn-success mt-2' type='submit'>OK</button>
        </form>
    </div>
  )
}

export default UseRefDemo