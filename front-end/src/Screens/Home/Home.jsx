import Layout from '../../Components/Layout';
import {postsData} from './postsData.js'
import { useState, useEffect } from 'react';
import {Link} from 'react-router-dom';

export default function Home({ user}) {
  const [posts, setPosts] = useState([])

  useEffect(() => {
    setPosts(postsData)

  },[])


  return (
    <Layout user={user}>
    <div className='home'>
      <h1>Latest posts below:</h1>
      {posts.map((post)=> (
        <div>
          <h3> {post.title}</h3>
          <p>{post.body}</p>
          <Link to={`/posts/${post._id}/comments`}>
            <button>Comments</button>
          </Link>
        </div>
      ))}
      </div>
    </Layout>
  )
}