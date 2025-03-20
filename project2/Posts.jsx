import React, { useEffect, useState } from 'react'

const Posts = () => {
    const [posts,setPosts]=useState([]);
      const getTopposts=async()=>{
      const res=await fetch("http://localhost:5000/trendposts",{
        method:"GET",
       
      })
      const data=await res.json();
      setPosts(data);
    }
  
    useEffect(()=>{
  getTopposts();
    },[])
  return (
    <div>
      <h1>Top posts</h1>
      {posts?.forEach((post)=>(
    <>
    <p>{post.userid.name}</p>
    <p>{post.content}</p>
   
    <p>{post.comments.length}</p>
    </>
  ))}
    </div>
  )
}

export default Posts
