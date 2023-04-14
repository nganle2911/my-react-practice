import React, { useRef } from 'react'

const LoginDemo = () => {

    const userLoginRef = useRef({username: '', password: ''}); 
    const handleChange = (e) => {
        const {value, name} = e.target;
        userLoginRef.current[name] = value; 
    }

    const handleSubmit = (e) => {
        e.preventDefault();
    }

  return (
    <form className='container mt-2' onSubmit={handleSubmit}>
        <h3>Login Demo</h3>
        <div className='form-group'>
            <p>Username</p>
            <input className='form-control' name='username' onChange={handleChange} />
        </div>
        <div className='form-group'>
            <p>Password</p>
            <input className='form-control' name='password' type='password' onChange={handleChange} />
        </div>
        <div className='form-group'>
            <button className='btn btn-success mt-3' type='submit'>Login</button>
        </div>
    </form>
  )
}

export default LoginDemo