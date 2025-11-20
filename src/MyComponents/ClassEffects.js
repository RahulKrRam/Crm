import React, { Component } from 'react'
export default class ClassEffects extends Component {
     constructor(props){
        super(props)
        this.state ={
            count:0
        }
     }

     updateCount = () => {
        this.setState({
            Count: this.State.count +1
        })
     }
     render() {
    return (
      <div>
        <h1>{this.state.count}</h1>
        <button onclick={this.updateCount}>Update</button>
      </div>
    )
  }
}
