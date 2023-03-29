import React, { Component } from 'react'
import { connect } from 'react-redux'
import KetQuaTroChoi from './KetQuaTroChoi'
import XucXac from './XucXac'
import '../../../assets/css/BaiTapGame.css'

class BaiTapGame extends Component {
  render() {
    return (
      <div className='bg-game'>
        <h3 className='text-center pt-3 display-4'>Dice Game Exercise</h3>
        <XucXac />
        <KetQuaTroChoi />
      </div>
    )
  }
}

const mapStateToProps = (state) => ({})

export default connect(mapStateToProps)(BaiTapGame)