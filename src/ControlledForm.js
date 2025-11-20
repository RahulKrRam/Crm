import React, { Component } from 'react'

export default class ControlledForm extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         data:""
      }
    }


    handleForm = (e) => {
       this.setState ({
       data:e.target.value.substring(0,15)
       });
    }
    
  render() {
    return (
      <div>
        <form action="">
            <h1>{this.state.data}</h1>
        <lable htmlFor="">Enter Name:</lable>
              <input type="text"  value={this.state.data} onChange={this.handleForm}/>
             
              <br/>
              <input type="submit" value="Submit"/>
        </form>
      </div>
    )
  }
}
