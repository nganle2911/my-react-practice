import React, { Component } from 'react'
import { connect } from 'react-redux'

export class BaiTapChonXe extends Component {
  render() {
    return (
      <div>
        <h3>Exercise 2: Choose Your Car !</h3>
        <div className="row">
          <div className="col-6">
            <img src="./img/imgBlackCar.jpg" className="w-100" alt="..." />
          </div>
          <div className="col-6">
            <button className="btn btn-danger mx-3">Red</button>
            <button className="btn btn-light mx-3">Silver</button>
            <button className="btn btn-warning mx-3">Steel</button>
            <button className="btn btn-dark mx-3">Black</button>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({})

export default connect(mapStateToProps)(BaiTapChonXe)



