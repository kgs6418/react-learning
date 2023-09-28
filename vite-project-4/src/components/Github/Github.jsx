import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'

const Github = () => {
    const data  = useLoaderData()
    // const[data,setData]=useState([]);
    // useEffect(()=>{
    //     fetch('https://api.github.com/users/hiteshchoudhary')
    //     .then(res=>res.json())
    //     .then(data=>{
    //         console.log(data);
    //         setData(data)
    //     })
    // },[])
  return (
    <div className='text-center text-black m-4 py-4 bg-red-300 text-3xl'>
      Github Followers :- {data.followers}
      <img src={data.avatar_url} alt="github picture" width={300}/>
    </div>
  )
}

export default Github

export const githubLoader=async()=>{
    const response = await  fetch('https://api.github.com/users/hiteshchoudhary')
    return response.json()

}
