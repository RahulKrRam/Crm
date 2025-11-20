import React, { useState } from 'react'

function OtherInputs() {

const [textArea,setTextArea] = useState("");
const [selectMenu, setSelectMenu] = useState("USA");
const [checked, setChecked]  = useState(false);

const handleSubmit=(e) =>{
    e.preventDefault();
    console.log(e.target[0] .value);
}
  return (
    <div className='text-center'>
      <form onSubmit={handleSubmit}>
        <label style={{verticalAlign:"top"}} htmlFor="">Comments: &nbsp;</label>
        <textarea value={textArea} onChange= {(e) => setTextArea(e.target.value)}  cols="30"  rows="5"></textarea>
        <br/><br/>
         <label htmlFor="">SelectCountry: &nbsp;</label>
         <select value={selectMenu} onChange={(e) => setSelectMenu(e.target.ariaValueMax)}>
            <option value="Canada">Canada</option>
            <option value="USA">USA</option>
            <option value="UK">UK</option>
            <option value="Brazil">Brazil</option>
         </select>
         <br/><br/>
         <label htmlFor="">YES I Agree the Terms &nbsp;</label>
         <input type="checkbox" checked={checked} onChange={(e) => setChecked(e.target.checked)}/> 
         <br/><br/>
        <input type="submit" value="submit"/>
      </form>
    </div>
  )
}
export default OtherInputs
