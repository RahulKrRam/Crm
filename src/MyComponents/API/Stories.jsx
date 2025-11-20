// import React from 'react'
// import { useEffect } from 'react';

// export default function Stories() {
//     let Api = "https://hn.algolia.com/api/v1/search?query=html";

//   const fecthApiData = (url)

//   const fetchApiData = async (url) => {
//     try{
//         const  res = await fetch(url);
//         const data = await res.json();
//         console.log(data);
//     }catch(error){
//         console.log(error)
//     }

//   }

//     useEffect(() =>
//     {
//         fetchApiData(API) ;

//     }, [])

//   return (

//     <div>

//         </div>
//   )
// }

// import React, { useState, useEffect } from 'react'
// import axios from 'axios';

// function Stories() {

//     const [loading, setLoading] = useState(false);
//     const [posts, setPosts] = useState([]);

//     useEffect(() => {
//         const loadPost = async () => {

//             // Till the data is fetch using API
//             // the Loading page will show.
//             setLoading(true);

//             // Await make wait until that
//             // promise settles and return its result
//             const response = await axios.get(
//             "https://reqres.in/api/users");

//             // After fetching data stored it in posts state.
//             setPosts(response.data);

//             // Closed the loading page
//             setLoading(false);
//             }

//         // Call the function
//         loadPost();
//     }, []);

//     return (
//         <>
//             <div >
//                 {loading ? (
//                     <h4>Loading...</h4>) :

//                     (posts.map((item) =>
//                         // Presently we only fetch
//                         // title from the API
//                         <h4>{item.email}</h4>

//                         )
//                     )
//                 }
//             </div>
//         </>
//     );
// }

// export default Stories;
import { Link } from "react-router-dom";
import React, { useEffect, useState } from "react";
function useEffectAPI() {
  const [users, setUsers] = useState([]);
  const getUsers = async () => {
    const res = await fetch("https://reqres.in/api/users/");
    const json = await res.json();
    setUsers(json.data);
    console.log(json);
  };
  useEffect(() => {
    getUsers();
  }, []);

  
// const [users, setUsers] = React.useState([]);
// const f = async () => {
//   const res = await fetch("https://reqres.in/api/users/");
//   const json = await res.json();
//   setUsers(json.data);
// };
// React.useEffect(() => {
//   f();
// }, []);
  return (
    <>
      <div>
        <h2>Api Data fetch</h2>
        <div className="container mt-5 bg-light">
          <div className="row text-center display-flex">
          
                
                <div className="container">
                {/* <Link to="/search">
           
          <button
            style={{ width: "200px" }}
            type="button"
            className="btn btn-outline-primary"
          >
            Create New{" "}
          </button>
          </Link>    */}

          {/* <Link to={`/search`}> 
          </Link>  */}



{/* <Link to='search' element={<Search />} /> */}
                   {/* <Link to='search' ></Link> */}
                  <div className="row">
                    <table>
                      <tr>
                        <th>Id</th>
                        <th>Email</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        
                      </tr>
                      {users.map((curElem) => {
                       return (
                      <tr className="bg-info">
                        <td>
                          <p>{curElem.id}</p>
                        </td>
                        <td>
                          <p>{curElem.email}</p>
                        </td>
                        <td>
                          <p>{curElem.first_name}</p>
                        </td>

                        <td>
                          <p>{curElem.last_name}</p>
                        </td>
                        
                      </tr>

                      
                      
                       );
                    })}
                    </table>
                  </div>
                </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default useEffectAPI;
