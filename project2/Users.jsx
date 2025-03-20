import React, { useEffect, useState } from 'react'

const Users = () => {
    const [users,setUsers]=useState([]);
      const getTopposts=async()=>{
      const res=await fetch("http://localhost:5000/trendposts",{
        method:"GET",
       
      })
      const data=await res.json();
      setUsers(data);
    }
  
    useEffect(()=>{
  getTopposts();
    },[])
  return (
    <div>
      <h1>Users</h1>
      <div className=''>
      {users?.forEach((user)=>(
    <>
    <p>{user.name}</p>
  
    </>
  ))}
      </div>
    </div>
  )
}

export default Users
