import React, { Component } from 'react';
import { NavLink, Outlet } from 'react-router-dom';

export default class HomeTemplate extends Component {
  render() {
    return (
      <div>
        <header className='nav bg-dark text-white p-2'>
            <NavLink className={({isActive}) => isActive ? 'nav-link fw-bold text-info text-uppercase' : 'nav-link'} to='/home'>Home</NavLink>
            <NavLink className={({isActive}) => isActive ? 'nav-link fw-bold text-info text-uppercase' : 'nav-link'} to='/register'>Register</NavLink>
            <NavLink className={({isActive}) => isActive ? 'nav-link fw-bold text-info text-uppercase' : 'nav-link'} to='/login'>Login</NavLink>
            <NavLink className={({isActive}) => isActive ? 'nav-link fw-bold text-info text-uppercase' : 'nav-link'} to='/baitapgiohang'>
            <i class="fa fa-cart-plus"></i> Cart
            </NavLink>
            <NavLink className={({isActive}) => isActive ? 'nav-link fw-bold text-info text-uppercase' : 'nav-link'} to='/form'>Form</NavLink>
            <NavLink className={({isActive}) => isActive ? 'nav-link fw-bold text-info text-uppercase' : 'nav-link'} to='/reactlifecycle'>React LifeCycle</NavLink>
            <NavLink className={({isActive}) => isActive ? 'nav-link fw-bold text-info text-uppercase' : 'nav-link'} to='/redux'>Redux</NavLink>
            <NavLink className={({isActive}) => isActive ? 'nav-link fw-bold text-info text-uppercase' : 'nav-link'} to='/gamexucxac'>Dice Game</NavLink>

            <div class="dropdown">
              <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                Hook Demo
              </button>
              <ul class="dropdown-menu">
                  <li><a class="dropdown-item" href="#">Action</a></li>
                  <li><a class="dropdown-item" href="#">Another action</a></li>
                  <li><a class="dropdown-item" href="#">Something else here</a></li>
              </ul>
            </div>
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




