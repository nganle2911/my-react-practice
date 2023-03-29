import React, { Component } from 'react'
import { connect } from 'react-redux'
import TableUser from './TableUser'

class BaiTapQuanLyUsers extends Component {

    handleSubmit = (e) => {
        e.preventDefault();
        let account = document.getElementById('account').value;
        let password = document.getElementById('password').value; 

        let user = {account, password}; 
        // console.log(user)
        // Tạo ra action đưa dữ liệu lên reducer
        const action = {
            type: 'ADD_USER',
            payload: user
        }
        this.props.dispatch(action); 
    }

  render() {
    return (
      <div style={{marginBottom: "300px"}}>
        <h3>Exercise 3: Users Management</h3>
        <form className='form' onSubmit={this.handleSubmit}>
            <div className='card'>
                <div className='card-header bg-dark text-white'>
                    User Information
                </div>
                <div className='card-body'>
                    <div className='form-group'>
                        <p>Account</p>
                        <input className='form-control' id='account' name='account' />
                    </div>
                    <div className='form-group'>
                        <p>Password</p>
                        <input className='form-control' id='password' name='password' />
                    </div>
                </div>
                <div className='card-footer'>
                    <button className='btn btn-success' type='submit'>Add user</button>
                </div>
            </div>
        </form>
        <TableUser />
      </div>
    )
  }
}

const mapStateToProps = (state) => ({})

export default connect(mapStateToProps)(BaiTapQuanLyUsers)