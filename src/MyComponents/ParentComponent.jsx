import React, { Component } from 'react'
import ChildComponent from './ChildComponent';

export default class ParentComponent extends Component {

    ParentMethod = (childName) =>{
        alert('Hello from Parent...' + childName);

    }
  render() {
    return (
      <div>
        <ChildComponent calMethod={this.ParentMethod}/>
      </div>
    )
  }
}
