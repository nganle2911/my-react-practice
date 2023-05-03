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
            <NavLink className={({isActive}) => isActive ? 'nav-link fw-bold text-info text-uppercase' : 'nav-link'} to='/hoc'>HOC</NavLink>
            

            <div className="dropdown">
              <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                Hooks
              </button>
              <ul className="dropdown-menu">
                <li>
                  <NavLink className="dropdown-item" to="/demo-usestate">useState</NavLink>
                  <NavLink className="dropdown-item" to="/demo-useeffect">useEffect</NavLink>
                  <NavLink className="dropdown-item" to="/demo-usecallback">useCallback</NavLink>
                  <NavLink className="dropdown-item" to="/demo-usememo">useMemo</NavLink>
                  <NavLink className="dropdown-item" to="/demo-useredux">useRedux</NavLink>
                  <NavLink className="dropdown-item" to="/demo-useref">useRef</NavLink>
                </li>
              </ul>
            </div>
            <div className="dropdown mx-3">
              <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                Hook Router
              </button>
              <ul className="dropdown-menu">
                <li>
                  <NavLink className="dropdown-item" to="/demo-usenavigate">useNavigate</NavLink>
                </li>
                <li>
                  <NavLink className="dropdown-item" to="/search">useSearchParams</NavLink>
                </li>
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




