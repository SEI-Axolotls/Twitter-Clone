import Layout from '../../Components/Layout';
import { useState, useEffect } from 'react';
import {useParams} from 'react-router-dom';

export default function Detail({ user }) {
  const [post, setPost] = useState({})
  
  useEffect(()=> {
    console.log('hello')
    setPost({
      title: "Looking for a change of scenary?",
      _id: 1,
      body: "I am of the mind to move out of the US and start fresh! Anyone recommend a good spot?",
      comments: [
        "Move to Portugal!",
        "Portugal is overrated - move to Iceland instead!",
      ],
    })
  },[])

  return (
    <Layout user={user}>
      <div className='detail-container'>
        <h1>{post.title}</h1>
        <h3>{post.body}</h3> 
        {post.title && post.comments.map((comment)=>(
          <p>{comment}</p>
        ))} 
      </div>
    </Layout> 
)
}