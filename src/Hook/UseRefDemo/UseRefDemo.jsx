import React, { useRef, useState } from 'react'


/**
 * useRef dùng để lưu trữ giá trị sau các lần render, thường thay thế useState trong 1 số trường hợp dữ liệu đó thay đổi nhưng không cần render lên giao diện
 */

const UseRefDemo = () => {

    const [arrComment, setArrComment] = useState([]);
    // const [comment, setComment] = useState("");
    const commentRef = useRef(""); 
    const inputComment = useRef(null);

    console.log("render");

    const handleChange = (e) => {
        const {value} = e.target; 
        // setComment(value);
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
        // setState của array comment
        // setArrComment([...arrComment, comment]); //setState bằng arrComment cũ, đồng thời, thêm comment mới vô arrComment 
        // setArrComment((state) => {
        //     // xủ lý logic 
        //     return [...arrComment, comment]
        // })
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

