// import React from 'react'
// import useSWR from 'swr'
// const fetcher = (...args) => fetch(...args).then(res => res.json())
// function Swr() { 
//     const { data, error } = useSWR('https://pokeapi.co/api/v2/pokemon', fetcher);
//     let res = data.results;
//     if(error) throw error;
//     const finalData = res.map((curEle) => (
//     <tr key={curEle.url}>
//         <td>{curEle.name}</td>
//         <td>{curEle.url}</td>
//     </tr>
//     ));
//     if (error) return <div>failed to load</div>
//     if (!data) return <div>loading...</div>
//     console.log('hii ',data.results);
//     return( 
//     <div>
//         <table className="table table-bordered">
//             <tr>
//                 <th>Name</th>
//                 <th>URL</th>
//             </tr>
//             {finalData}
//         </table>
//     </div>
//     )
// }
// export default Swr;
import React from "react";
import useSWR from "swr";

const fetcher = (url) => fetch(url).then((res) => res.json());

export default function Swr() {
  
  const { data, error } = useSWR(
    "https://dummyjson.com/products",
    fetcher
  );
  if (error) return "An error has occurred.";
  if (!data) return "Loading...";
  return (
    <div>
       <>
            <div>QuoteB (Using SWR)</div>
            <div >{data?.username}</div>
        </>
    </div>
  );
}


