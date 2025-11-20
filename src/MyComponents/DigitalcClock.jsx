import React from 'react'
import { useState } from 'react';

const DigitalcClock = () => {

    let time = new Date().toLocaleTimeString();

    const [ctime,setCtime] = useState(time);

    const UpdateTime = ()  => {
        time = new Date().toLocaleTimeString();
        setCtime(time);
    }
   
    setInterval(UpdateTime,1000)
  return (
    <div>
         <h1 className='text-center my-5 card w-25'>{ctime} </h1>
         {/* <button onClick={UpdateTime}>get time</button> */}     
    </div>
  )
}

export default DigitalcClock
