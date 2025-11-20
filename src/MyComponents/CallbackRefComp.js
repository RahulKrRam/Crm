import React, { Component } from 'react'

export default class form extends Component {
    constructor(props) {
      super(props)
    
      {
         this.myRef = null;
         this.setMyRef = (element) => {
          this.myRef = element;
         }
      }
    }

    componentDidMount(){
     console.log(this.myRef);
     this.myRef.focus();
     
    }

    handleSubmit = (e) => {
      e.preventDefault();
      this.myRef.style.color = 'Red';
      this.myRef.style.backgroundColor = 'yellow';
      console.log('Name = ', this.myRef.value)
    }
    
  render() {
    return (
      <div className='text-center'>
       <form onSubmit={this.handleSubmit}>
       <input type="text" ref={this.setMyRef} placeholder='Enter your Name'/> <input type="submit" value="Add"/>
       </form>
      </div>
    )
  }
}
