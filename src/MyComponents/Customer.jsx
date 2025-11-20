
import React, { Component } from 'react'
 
// class Customer extends Component {

//   constructor() {
//     super()
//     this.state = {
//       name: "Kumar",
//       age: 27
//     }
//   }
//   render() {

//     const { name, age } = this.state
//     return (
//       <div>
//         <h1>{name}</h1>
//         <h1>{age}</h1>

//       </div>
//     )
//   }
// }

// function Customer({name,  age}) {
//   return (
//     <div>
//         <h1>{name}</h1>
//         <h1>{age}</h1>
//     </div>
//   )
// }

function Customer(props) {
  const {name, age} = props

  return (
    <div>
        <h1>{name}</h1>
        <h1>{age}</h1>
    </div>
  )
}



// class Customer extends Component {
//   render() {

//     const { name, age } = this.props
//     return (
//       <div> <h1>{name}</h1>
//       //         <h1>{age}</h1></div>
//     )
//   }
// }



export default Customer