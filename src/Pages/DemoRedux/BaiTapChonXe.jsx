import React, { Component } from 'react'
import { connect } from 'react-redux'

class BaiTapChonXe extends Component {

    handleChangeColor = (color) => {
        let imgSrc = `./img/img${color}Car.jpg`;
        const action = {
            type: "CHANGE_COLOR",
            payload: imgSrc
        }
        this.props.dispatch(action);
    }

  render() {
    // console.log(this.props); 
    const {imgSrcReducer} = this.props; 
    return (
      <div>
        <h3>Exercise 2: Choose Your Car !</h3>
        <div className='row'>
            <div className='col-6'>
                <img src={imgSrcReducer} className='w-100' alt='...' />
            </div>
            <div className='col-6'>
                <button className='btn btn-danger mx-2' onClick={() => {
                    this.handleChangeColor('Red');
                }}>Red</button>
                <button className='btn btn-success mx-2' onClick={() => {
                    this.handleChangeColor('Green');
                }}>Green</button>
                <button className='btn btn-dark mx-2' onClick={() => {
                    this.handleChangeColor('Black');
                }}>Black</button>
                <button className='btn btn-warning mx-2' onClick={() => {
                    this.handleChangeColor('Yellow');
                }}>Yellow</button>
                <button className='btn btn-light mx-2' onClick={() => {
                    this.handleChangeColor('Silver');
                }}>Silver</button>
            </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
    imgSrcReducer: state.imgSrcReducer 
})

export default connect(mapStateToProps)(BaiTapChonXe)