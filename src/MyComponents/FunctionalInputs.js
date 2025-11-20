import React, { useState } from 'react'

function FunctionalInputs() {

    const [data, setData] = useState({
       name:"",
       

    }) 
    
    const hanldleChange = (e) => {

        // const name = e.target.name;
        // const value = e.target.value;
        // console.log = (e.target.name);
        // console.log=(e.target.value);
         const {name,value} = e.target
        const new_value = (name === "email") ? value.toLowerCase() : value;
        

        console.log(e.target);
        setData((prev) =>{
            return{
                ...prev, [name]: new_value
            }

        }); 

    }

    const handleSubmit = (e) => {
        e.preventDefault();

         console.log(data);
    }
  return (
    <div onSubmit={handleSubmit}>
      <form>
        <lable htmlFor="">Enter Name:</lable>
        <input type = "text" value={data.name} onChange={hanldleChange} name='name' placeholder= 'Enter Your Name'/>


        <input type="submit" value="Submit"/>
      </form>
    </div>
  )
}

export default FunctionalInputs
