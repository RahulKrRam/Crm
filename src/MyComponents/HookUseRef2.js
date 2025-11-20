import React, { useEffect, useRef, useState } from 'react'
function HookUseRef2() {
    const [inputValue, SetinputValue] = useState("");
    // const [count, SetCount] = useState(0);
    const count = useRef(0);
    useEffect(() => {
       count.current = count.current + 1;
    }); 
    // useEffect(()  => {
    //     SetCount (count +1)  
    // },[]);
    return (
        <div className='text-center my-5'>
            <lable htmlfor="">Enter The  Name: </lable>
            <input 
            type="text" 
            placeholder='Enter Name ' 
            value={inputValue}
            onChange={(e)  => SetinputValue(e.target.value)}/>
            <h2>Render Count:{count.current}</h2>
            <li>{inputValue}</li>
        </div>
    )
}
export default HookUseRef2
