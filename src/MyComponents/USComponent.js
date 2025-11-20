import React, { useState } from 'react'

// function USComponent() {

//    const myArray = useState("Rahul")
//   return (
//     <div>
//       <h1>{myArray[0]}</h1>
//       <button onClick={() => myArray[1]("Kumar")}>Update</button>
//     </div>
//   )
// }

// export default USComponent


// function USComponent() {

//     const myArray = useState("Rahul")
//     let changeState = () => {
//         myArray[1]("Prem")
//     }
//    return (
//      <div>
//        <h1>{myArray[0]}</h1>
//        <button onClick={changeState}>Update</button>
//      </div>
//    )
//  }
 
//  export default USComponent


function USComponent() {

    const [name, setName] = useState("Sujit")
    let changeState = () => {
     setName("Rahul")
    }
   return (
     <div>
       <h1>{name}</h1>
       <button onClick={changeState}>Update</button>
     </div>
   )
 }
 
 export default USComponent