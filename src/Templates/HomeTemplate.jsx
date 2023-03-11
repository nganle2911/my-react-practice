import React, { Component } from 'react';
import { Outlet } from 'react-router-dom';

export default class HomeTemplate extends Component {
  render() {
    return (
      <div>
        <header className='nav bg-dark text-white p-2'>
            <a className='nav-link' href='/home'>Home</a>
            <a className='nav-link' href='/register'>Register</a>
            <a className='nav-link' href='/login'>Login</a>
        </header>
        <div className='content' style={{minHeight: '75vh'}}>
            <Outlet />
        </div>
        <footer className='bg-dark text-white p-5'
        >Footer</footer>
      </div>
    )
  }
}

