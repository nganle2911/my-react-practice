import React, { Component } from 'react'

export default class DemoState extends Component {

    state = {
        result: true, 
    }

    renderInterface = () => {
        if (this.state.result) {
            return <>
                <span className='bg-success p-3'>Congratulations !!!</span>
                <button className='btn btn-primary mx-3' onClick={() => {
                    this.handleFail();
                }}>Continue to play !</button>
            </>
        }
        return <>
            <span className='bg-dark text-white p-3'>Sorry ! You need to play again !</span>
            <button className='btn btn-secondary mx-3' onClick={() => {
                this.handleWin();
            }}>Play again !</button>
        </>
    }

    handleWin = () => {
        this.setState({
            result: true
        })
        console.log(this.state); 
    }

    handleFail = () => {
        this.setState({
            result: false
        })
        console.log(this.state);
    }

  render() {
    return (
      <div className='container mt-4'>
        {this.renderInterface()}
      </div>
    )
  }
}
