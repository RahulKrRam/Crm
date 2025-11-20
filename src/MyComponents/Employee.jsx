import React, { Component } from 'react'
// import { Button } from '@material-ui/core';

export default class Employee extends Component {
    constructor(props){
        super(props);
        this.state ={
            // name:"Learning Never Ends"
            // name:1
            name:this.props.name,
            age:23,
            surname:"Ram"
        }
       }
       
       changeName(){
           this.setState({
             name:"Welcome To Our Channel",
             age:33,
             surname:"Das"
            // name: this.state.name+1

           })
       }
  render() {
    return (
      <div>
        <h1>{this.state.name}</h1>
        <h1>{this.state.age}</h1>
        <h1>{this.state.surname}</h1>
        <input className='btn btn-success' type="button" value="Click" onClick={() => this.changeName()} />
      </div>
    )
  }
}
