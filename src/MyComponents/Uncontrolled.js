import React, { Component } from 'react'
import  {createRef} from 'react'
export default class Uncontrolled extends Component {
    constructor(props) {
      super(props)
      this.nameRef = createRef();
      this.ageRef = createRef();   
      }
    //   componentDidMount(){
    //     console.log(this.nameRef);
    //     console.log(this.ageRef);
    //     this.nameRef.current.focus();
    //   }
  render() {
    
    return (
      <div>
        <form className='text-center' onSubmit={this.handleSubmit}> 
            <label htmlFor="">Enter Name: </label>
            <input type="text" value="Rahul" placeholder="Name" />
            <br/><br/>

            <label htmlFor="">Enter Age: </label>
            <input type="text" value="29" placeholder="Age" />
            <br/> <br/>
            <input type="submit" value="Submit" /> 
           

         </form>
      </div>
    )
  }
}
