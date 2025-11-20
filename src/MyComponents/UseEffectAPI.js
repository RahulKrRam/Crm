import React, { useEffect, useState } from 'react'
    function    useEffectAPI() {
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
        <>
        <div>
            <h2>Api Data fetch</h2>
            <div className='container mt-5 bg-light col-md-4'>
                <div className='row text-center display-flex'>
               {
                  users.map((curElem) => {
                            return (
                                <div className='container'  >
                                    <div className='row'>
                                        <div className='card col-4 p-2 bg-light justify-content-center'>
                                            <div className='d-flex align-items-center'>
                                                <div className='image'><img src={curElem.thumbnailUrl} className="rounded m-3 " width={155} height={100} /></div>
                                                <div className='ml-3 w-100'>
                                                    <h4 className='mb-0 mt-0 textLeft'>Thapa</h4><span className='textLeft'>{curElem.title}</span>
                                                    <div className='p-2 mt-2 bg-primary d-flex justify-content-between rounded text-white stats'>
                                                        <div className='d-flex flex-column'><span className='articles'>Articles</span> <span className='number1'>38</span></div>
                                                        <div className='d-flex flex-column'><span className='followers'>Followers</span> <span className='number2'>980</span></div>
                                                        <div className='d-flex flex-column'><span className='rating'>Rating</span> <span className='number3'>8.9</span></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
            </div>
        </>
    )
}
export default useEffectAPI

