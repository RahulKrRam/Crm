
import React, { useEffect, useState } from 'react'

function Quote() {

    const [users, setUsers] = useState([]);

    const getUsers = async () => {
        const response = await fetch('https://reqres.in/api/users?page=2');
        setUsers(await response.json());
        console.log(users);
        
    }
    useEffect(() => {
        getUsers();
    }, []);

    return (
        <>
        <div>
            <h2>List of Github Users</h2>
            <div className='container mt-5 bg-light'>

                <div className='row text-center display-flex'>
                    <table>
                        <tr>
                            <th>Id</th>
                            <th>Image</th>
                            <th>Name</th>
                            <th>Title</th>
                            <th>Email</th>
                        </tr>
                        {
  
                        users.data.map((item) => {
                            return (
                            <>
                                <tr>
                                    <td>{item.id}</td>
                                    <td><img width={40} src={item.avatar} alt="" /></td>
                                </tr> 
                            </>
                            )
                        })
                        }
                    </table>
                </div>
            </div>
            </div>
        </>
    )
}

export default Quote











// import React, { useState , useEffect } from 'react'
//  import axios from 'axios'
// import useSWR from 'swr'



// function Quote() {

//     // const [quote, setQuote] = useState([null]);
          
      
      
//     // useEffect(() => {
//     //     const fecthQuote = async () => {

//     //                    //Useing Fetch
//     //         // const res = await fetch('https://api.quotable.io/random');
//     //         // const data = await res.json();


//     //                //Useing axios
//     //         const res = await axios.get('https://api.quotable.io/random');

//     //         setQuote(res.data);
//     //         console.log(res);
//     //     }
//     //     fecthQuote();
//     //   }, []);




//                             //Useing SWR



//         const fetcher = async (...args)   =>{
//            const res = await fetch(...args);
//            const data = await res.json();
//            return data;
//         }

//         const {data} = useSWR('https://api.quotable.io/random' , fetcher);
//         console.log(data);

//         return (
    
//          <div>
//           <h1>Get qutes using fetch API</h1>
//           <div>{data.content}</div>
//          </div>
        
//         )

     
 
// }

// export default Quote
