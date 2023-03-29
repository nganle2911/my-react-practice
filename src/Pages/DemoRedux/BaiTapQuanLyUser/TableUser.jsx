import { computeHeadingLevel } from '@testing-library/react';
import React, { Component } from 'react'
import { connect } from 'react-redux'

class TableUser extends Component {
  render() {
    console.log(this.props);
    let {arrUserReducer} = this.props; 
    return (
      <table className='table mt-2'>
        <thead className='bg-dark text-white'>
            <tr>
                <th>Account</th>
                <th>Password</th>
            </tr>
        </thead>
        <tbody>
            {arrUserReducer.map((item, index) => {
                return <tr key={index}>
                    <td>{item.account}</td>
                    <td>{item.password}</td>
                </tr>
            })}
        </tbody>
      </table>
    )
  }
}

const mapStateToProps = (state) => ({
    arrUserReducer: state.arrUserReducer
})

export default connect(mapStateToProps)(TableUser)