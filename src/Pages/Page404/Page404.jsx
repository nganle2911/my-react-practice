import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

export default class Page404 extends Component {
  render() {
    return (
      <div className='container'>
        <p>404 Page Not Found</p>
        <NavLink to='' className={'btn btn-warning'}>Click here to go back to HomePage !!!</NavLink>
      </div>
    )
  }
}
