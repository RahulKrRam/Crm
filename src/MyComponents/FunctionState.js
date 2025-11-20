import React from 'react'
import {useState} from 'react'
function FunctionState() {
    let [img, setImg] = useState(0)
    let Increase = () => {
        setImg(img + 3)
    }
    
    let Decrease = () => {
        setImg(img - 10)
    }
    
  return (
    <div>
      <h1>{img}</h1>
      <button onClick={Increase}>Increment</button>
        <button onClick={Decrease}>Dcrement</button>
    </div>
  )
  }
export default FunctionState
