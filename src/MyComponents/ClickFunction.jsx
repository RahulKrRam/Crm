// import React from 'react'
//Class components
import React, { Component } from 'react'
// class ClickFunction extends Component {
//     // Event Handler
//     HelloFunction() {
//         alert("Hello Brother ")
//     }
//     render() {
//         return (
//             <div className='text-center'>
//                            //Event
//                 <input type="button" value="click" onClick={this.HelloFunction} />
//             </div>
//         )
//     }
// }
// class ClickFunction extends Component {
//     // Event Handler
//     HelloFunction() {
//         alert("Hello Brother ")
//     }
//     render() {
//         return (
//             <div className='text-center'>
//                            //Event
//                 <input type="button" value="click" onClick={this.HelloFunction} />
//             </div>
//         )
//     }
// }







//Functional component
// function ClickFunction() {

//         // Event Handler
//     function HelloFunction (){
//         alert("Hello Brother ")
//     }

//   return (
//     <div className='text-center'>
//         //Event
//         <input  type="button" value="click" onClick={HelloFunction}/>
//     </div>
//   )
// }
// Functional component
function ClickFunction(props) {

        const HelloFunction = (name) => {
            alert("Hello " + name);
        }
  return (
//event
    <div className='text-center'>
 
        <input  type="button" value="click" onClick={() => HelloFunction(props.name)}/>
    </div>
  )
}
export default ClickFunction