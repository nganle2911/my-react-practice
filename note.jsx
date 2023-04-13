import React, { useRef, useState } from 'react'
const UseRefDemo = () => {

    const [arrComment, setArrComment] = useState([]);
    const commentRef = useRef(""); 
    const inputComment = useRef(null);

    console.log("render");

    const handleChange = (e) => {
        const {value} = e.target; 
        commentRef.current = value;

        // Đổi màu nội dung khi được nhập vào input 
        if (inputComment.current.style.color !== "red") {
            inputComment.current.style.color = "red";
        } else {
            inputComment.current.style.color = "green"; 
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault(); 
        setArrComment([...arrComment, commentRef.current]);
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
            <input ref={inputComment} id='comment' className='form-control' onInput={handleChange} />
            <button className='btn btn-success mt-2' type='submit'>OK</button>
        </form>
    </div>
  )
}

export default UseRefDemo;