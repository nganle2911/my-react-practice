import React, { Component } from 'react'
import { connect } from 'react-redux'

class KetQuaTroChoi extends Component {
  render() {
    return (
      <div className='text-center pt-5'>
        <div className="display-4">
          Bạn cược: <span className="text-success">Tài</span>
        </div>
        <div className="display-4">
            Số bàn thắng: <span className="text-primary">0</span>
        </div>
        <div className="display-4">
            Tổng số bàn chơi: <span className="text-warning">0</span>
        </div>
        <div className='display-4'>
            <button className='btn btn-success'>Play game</button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({})

export default connect(mapStateToProps)(KetQuaTroChoi)