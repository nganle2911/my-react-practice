import React, { Component } from 'react';
import {connect} from 'react-redux';

export default class DemoTangGiamFontSize extends Component {
  render() {
    return (
      <div>
        <h3>Exercise 1: Increase / Decrease Font Size</h3>
        <p>Reprehenderit velit eiusmod fugiat sint aliquip tempor commodo aute enim. Commodo cillum ullamco Lorem cillum cupidatat veniam culpa adipisicing occaecat dolore dolor magna cillum cillum. Adipisicing nulla amet exercitation aute. Mollit qui commodo aliqua mollit pariatur sit proident ipsum ut voluptate culpa mollit deserunt. Commodo in duis consectetur ad nisi irure. Aliquip quis laborum irure mollit elit minim proident culpa proident minim velit.</p>
        <button className='btn btn-primary mx-2'>
            <i class="fa fa-plus"></i>
        </button>
        <button className='btn btn-secondary'>
            <i class="fa-solid fa-minus"></i>
        </button>
      </div>
    )
  }
}



