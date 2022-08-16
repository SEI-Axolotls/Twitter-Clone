import Layout from '../../Components/Layout';
import {postsData} from './postsData.js'
import { useState, useEffect } from 'react';
import {Link} from 'react-router-dom';
import { getPosts } from '../../services/posts';

export default function Home({ user, toggle}) {
  const [posts, setPosts] = useState([])

  useEffect(() => {
    // setPosts(postsData)
    const fetchPosts = async()=>{
      let response = await getPosts()
      setPosts(response)
    }
    fetchPosts()
  },[toggle])


  return (
    <Layout user={user}>
    <div className='home'>
      <h1>Latest posts below:</h1>
      {posts.map((post)=> (
        <div key={post.id}>
          <h3> {post.title}</h3>
          <p>{post.body}</p>
          <Link to={`/posts/${post.id}/comments`}>
            <button>Comments</button>
          </Link>
        </div>
      ))}
      </div>
    </Layout>
  )
}