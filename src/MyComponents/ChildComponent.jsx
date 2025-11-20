import React, { Component } from 'react'

export default class ChildComponent extends Component {
  render() {
    return (
      <div className='text-center'>
        <button className='btn btn-primary' onClick={this.props.calMethod }>Click Me </button>
        {/* <button className='btn btn-primary' onClick={this.props.calMethod('rahul','Ram')}>Click Me </button> */}
      </div>
    )
  }
}
