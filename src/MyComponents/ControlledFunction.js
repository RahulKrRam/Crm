import React, { useState } from 'react'

function ControlledFunction() {
    const [ name, setName] = useState("Rahul")
  return (
    <div>
      <form  >
       <lable htmlFor="">
        Enter Name:
       </lable>
       <input type="text" value={name} onChange={(e) => setName(e.target.value)}/>
       <br/><br/>
       <input type="submit" Value="Submit"/>

      </form>
    </div>
  )
}

export default ControlledFunction
