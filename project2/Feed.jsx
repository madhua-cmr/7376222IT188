import React, { useEffect, useState } from 'react'

const Feed = () => {
  const [posts,setPosts]=useState([]);
    const getfeedposts=async()=>{
    const res=await fetch("http://localhost:5000/feed",{
      method:"GET",
     
    })
    const data=await res.json();
    setPosts(data);
  }

  useEffect(()=>{
getfeedposts();
  },[])
  return (
    <div>
      <h1>Feed Posts</h1>
  {posts?.forEach((post)=>(
    <>
    <p>{post.userid.name}</p>
    <p>{post.content}</p>
    </>
  ))}
    </div>
  )
}

export default Feed
