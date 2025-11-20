import React, { useEffect , useRef, useState} from 'react'
import axios from 'axios'
   

function Image() {

    const [users, setUsers] = useState([]);

    const getUsers = async () => {
        const response = await fetch('https://jsonplaceholder.typicode.com/photos');

        setUsers(await response.json());
        console.log(response);

    }

    useEffect(() => {
        getUsers();
    }, []);
  return (
    <div>
        mdsmfklds
      
    </div>
  )
}

export default Image

