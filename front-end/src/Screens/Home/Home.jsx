import Layout from '../../Components/Layout';
import {postsData} from './postsData.js'
import { useState, useEffect } from 'react';

export default function Home({ user}) {
  const [posts, setPosts] = useState([])

  useEffect(() => {
    setPosts(postsData)

  },[])


  return (
    <Layout user={user}>
    <div className='home'>
      <h1>Hi</h1>
      {posts.map((post)=> (
        <div>
          <h3> {post.title}</h3>
        <p>{post.body}</p>
        </div>
      ))}
      </div>
    </Layout>
  )
}