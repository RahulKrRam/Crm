import React, { Component } from 'react'
export default class MultipleInpts extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         name:"",
         email:""
      }
    }
// handleName = (e) => {
//     this.setState({
//          name:e.target.value
//     });
// }
// handleEmail = (e) => {
//     this.setState({
//          email:e.target.value
//     });
// }
handleChange = (e) => {  
    const new_value = ( e.target.name  === "email") ? e.target.value .toLowerCase().substring(0,15) : e.target.value;
    this.setState({
        [e.target.name]: new_value
   
    })

    // console.log(e.target.value);
    // console.log(e.target.value);
    // const value = e.target.value
    // const name = e.target.name
    // const new_value = (name  === "email") ? value .toLowerCase().substring(0,15) : value;
    // this.setState({
    //     [name]: new_value
    // })
 // console.log(e.target.value);
    // console.log(e.target.value);
    // const value = e.target.value
    // const name = e.target.name
    // this.setState({
    //     [name]: value
    // // });
    // // this.setState({
    // //     [e.target.name]: e.target.value
    // })
    // this.setState({
    //      name:e.target.value
    // });
} 
  render() {
    return (
      <div className='text-center'>
        <form >
            <lable htmlFor="">Enter Name:</lable>
            <input type="text" name="name" value={this.state.name} onChange={this.handleChange
            } placeholder="Enter Your Name" />
            <br/> <br/>

            <lable htmlFor="">Enter Email:</lable>
            <input type="text" name="email" value={this.state.email} onChange={this.handleChange} placeholder="Enter Your Email" />
            <br/> <br/>

            <input type="submit" value="Submit" />
        </form>
      </div>
    )
  }
}
