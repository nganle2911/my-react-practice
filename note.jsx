import React, { Component, PureComponent } from 'react'

export default class note extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      objectLike: {
        like: 5
      }
    }
  }
  render() {
    const {objectLike} = this.state; 
    return (
      <div>
        <p>like: </p>
        <button onClick={() => {
          let {objectLike} = this.state; 
          objectLike.like += 1; 
          this.setState({
            objectLike: {...objectLike}
          })
        }}>
          <i className='fa fa-heart text-danger'></i>
        </button>
      </div>
    )
  }
}



