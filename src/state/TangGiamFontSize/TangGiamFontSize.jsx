import { computeHeadingLevel } from '@testing-library/react'
import React, { Component } from 'react'

export default class TangGiamFontSize extends Component {

    state = {
        fSize: 16, //Xác định state là number => gán giá trị mặc định 
        screenMode: "light-mode", //true = light, false = dark 
        imgSrc: "https://picsum.photos/id/0/300/300",
    }


  render() {
    return (
      <div className='container mt-3'>
        <h3>Increase / Decrease FontSize</h3>
        <p style={{fontSize: this.state.fSize}}>Clita dolor gubergren accusam sed sed gubergren amet, nonumy diam vero kasd et diam. No justo clita rebum labore eirmod.</p>
        <button className='btn btn-primary mx-2' onClick={() => {
            this.setState({
                fSize: this.state.fSize + 2 
            })
            console.log(this.state); 
        }}>+</button>
        <button className='btn btn-warning mx-2' onClick={() => {
            this.setState({
                fSize: this.state.fSize - 2
            })
            console.log(this.state);
        }}>-</button>

        <hr />

        <h3>Change Theme</h3>
        <select className='w-25 form-control' onChange={(e) => {
            const tagSelect = e.target; 
            // console.log(tagSelect)
            this.setState({
                screenMode: tagSelect.value
            })
            // console.log(this.state)
        }}>
            <option value={"light-mode"}>Light mode</option>
            <option value={"dark-mode"}>Dark mode</option>
        </select>

        <div className={`border border-success p-5 mt-3 ${this.state.screenMode}`}>
            <p>Dolore sed amet kasd amet sit voluptua diam diam sit. Invidunt takimata invidunt accusam dolores eirmod dolores at amet invidunt, dolores accusam est takimata dolore labore, vero et sit ut.</p>
        </div>

        <hr />

        <div className='w-25 card'>
            <img src={this.state.imgSrc} alt='...' />
            <div className='card-body'>
                <button className='btn btn-danger' onClick={() => {
                    let id = Math.floor(Math.random() * 501); 
                    // console.log(id); 
                    let newImgSrc = `https://picsum.photos/id/${id}/300/300`; 
                    // console.log(id)
                    this.setState({
                        imgSrc : newImgSrc
                    })
                }}>Random</button>
            </div>
        </div>
      </div>
    )
  }
}


