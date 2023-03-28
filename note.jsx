import React, { Component } from 'react'
import { connect } from 'react-redux'

export class note extends Component {
  render() {
    return (
      <div>note</div>
    )
  }
}

const mapStateToProps = (state) => ({})

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(note)
