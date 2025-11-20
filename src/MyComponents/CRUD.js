import React, { useState } from 'react'

function CRUD() {
    const list = [
        {
            id: 1,
            name: "HP",
            price: "2222"
        },

        {
            id: 1,
            name: "HP",
            price: "2245"
        },
    ]
 

    const [lists, setList] = useState(list);
    return (

        <div>
             <div className='' >
                <AddList setList = {setList}/>
            <table className='text-center'>{
                lists.map((current) => (
                    <tr>

                        <td className='bg-success w-25 h-25'>{current.name}</td>
                        <td className='bg-danger  w-25 h-25'>{current.price}</td>
                        <td>
                            <button className='btn btn-dark m-3'>Edit</button>
                            <button className='btn btn-primary'>Delete</button>
                        </td>
                    </tr>
                ))
            }

            </table>

        </div>
        </div>
       
    )
}

function AddList({setList}){

    function handleSubmit(event){
        event.preventDefault();
        const name = event.target.elements.name.value;
        const price = event.target.elements.price.value;
        const newlist = {
            id: 3,
            name,
            price 
        }

        setList((prevList) =>{
            return prevList.concat(newlist)
        } )
    }
    return(

        <from   className="addFrom" onSubmit={handleSubmit}>
            <input type="text" name="name" placeholder="Enter Name"/>
            <input type="text" name="name" placeholder="Enter Name"/>
            <button type="submit" className='btn btn-primary'>Add</button>
              
        
        </from>
    )
}

export default CRUD
