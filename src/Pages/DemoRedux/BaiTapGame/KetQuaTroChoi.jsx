import React, { Component } from 'react'
import { connect } from 'react-redux'

class KetQuaTroChoi extends Component {
  render() {
    return (
      <div className='text-center pt-5'>
        <div className="display-4">
          Your Bet: <span className="text-success">Tài</span>
        </div>
        <div className="display-4">
            Sum of your Wins: <span className="text-primary">0</span>
        </div>
        <div className="display-4">
            Sum of your Play: <span className="text-warning">0</span>
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