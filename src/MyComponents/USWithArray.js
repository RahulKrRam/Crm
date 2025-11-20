import React, { useState } from 'react'

function USWithArray() {
    let num = [11,22,33,44];
    let [numbers , setNumbers] = useState(num);
    // let changeList = ()  => {
    //     setNumbers ([55, 66, 77,88]);
        
    // }
    let changeList = () => {
        setNumbers(previousState => {
            return [
                ...previousState,
                // Math.random() * 50 
                // 98
               Math.floor( Math.random() * 50 
            ]
        })
    }
    
  return (
    <div>
      <ul>
        {numbers.map(n => <li>{n}</li>)}
        <button onClick = {changeList}>Change Array</button>
      </ul>
    </div>
  )
}

export default USWithArray
