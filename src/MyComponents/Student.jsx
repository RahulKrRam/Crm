import React from 'react'

function Student(props) {
  console.log(props);
  return (
   <>
   <div style={{backgroundColor:"skyblue", margin:10}}>
   <h1 >Hello {props.name}</h1>
   <h1> email:{props.email}</h1>
   <h1> {props.object.address}</h1>
   </div>
   </>  
  )
}
export default Student