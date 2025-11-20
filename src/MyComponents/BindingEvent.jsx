import React, { Component } from 'react'
export default class BindingEvent extends Component {
    constructor() {
        super();     
       this.HandleEvent = this.HandleEvent.bind(this);
        this.state ={
            name:"Rahul"
        }
      }
      
      HandleEvent(){
        this.setState({
            name:"Kumar"
        });
      }

    HandleEvent = () =>{
        this.setState({
            name:"Kumar"
        });
      }
      
  render() {
    return (
      <div>
        <h1>{this.state.name}
        </h1>
        {/* <button type='button' onClick={this.HandleEvent} >Demo-button</button> */}
        {/* <button type='button' onClick={this.HandleEvent.bind(this)} >Demo-button</button> */}
        <button type='button' className='btn btn-success'   onClick={this.HandleEvent} >Demo-button</button>
      </div>
    )
  }
}
