import React, { Component } from 'react'
import { connect } from 'react-redux'

class KetQuaTroChoi extends Component {
  render() {
    // console.log(this.props);
    const {gameReducer} = this.props; 
    return (
      <div className='text-center pt-5'>
        <div className="display-4">
          Your Bet: <span className="text-success">{gameReducer.valueOfBet ? "Tài" : "Xỉu"}</span>
        </div>
        <div className="display-4">
            Sum of your Wins: <span className="text-primary">{gameReducer.sumOfWin}</span>
        </div>
        <div className="display-4">
            Sum of your Play: <span className="text-warning">{gameReducer.sumOfPlay}</span>
        </div>
        <div className='display-4'>
            <button className='btn btn-success' onClick={() => {
              const action = {
                type: 'PLAY_GAME'
              }
              // setInterval(() => {
              //   this.props.dispatch(action);
              // }, 1000);
              this.props.dispatch(action); 
            }}>Play game</button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  gameReducer : state.gameReducer 
})

export default connect(mapStateToProps)(KetQuaTroChoi)