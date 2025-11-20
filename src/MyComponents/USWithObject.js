import React, { useState } from 'react'

function USWithObject() {
    const obj = {
       name:"Rahul" ,
       age:29,
       height:5.11,
       isYoung:true
    }
    const [person,setPerson]= useState(obj);
    let changeState = () => {
        setPerson(previousState{
           return {
            ...previousState ,
            name:"Kumar"
            
           }
           
        });


        setPerson({
            name:"Zain",
            age: 23,
            height: 5.4,
            isYoung: false
        });

    }
  return (
    <div className='text-center'>
           <h1>{person.name}</h1>
           <h1>{person.age}</h1>
           <h1>{person.height}</h1>
           <h1>{person.isYoung}</h1>
           <button onClick={changeState}>Change</button>
    </div>
  )
}

export default USWithObject
