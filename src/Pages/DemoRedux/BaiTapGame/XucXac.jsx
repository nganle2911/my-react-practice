import React, { Component } from 'react'
import { connect } from 'react-redux'

class XucXac extends Component {

  betValue = (val) => {
    const action = {
      type: 'BET',
      payload: val
    }
    this.props.dispatch(action); 
  }

  render() {
    let {arrDice} = this.props;
    // console.log(arrDice);
    return (
      <div>
        <div className='container-fluid'>
            <div className='row text-center'>
                <div className='col-4'>
                    <button className='btn btn-danger mx-5' onClick={() => {
                      this.betValue(true); 
                    }}>
                        <div className='bg-danger display-4 p-5'>
                            Tài
                        </div>
                    </button>
                </div>
                <div className='col-4'>
                    {/* <img src='./img/1.png' alt='...' width={50} height={50} />
                    <img src='./img/1.png' alt='...' width={50} height={50} />
                    <img src='./img/1.png' alt='...' width={50} height={50} /> */}
                    {arrDice.map((item, index) => {
                      return <img key={index} src={item.img} alt="..." width={50} height={50} />
                    })}
                </div>
                <div className='col-4'>
                <button className='btn btn-danger mx-5' onClick={() => {
                  this.betValue(false);
                }}>
                        <div className='bg-danger display-4 p-5'>
                            Xỉu
                        </div>
                    </button>
                </div>
            </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  arrDice : state.gameReducer.arrDice
})

export default connect(mapStateToProps)(XucXac)