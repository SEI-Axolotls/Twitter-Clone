import Layout from '../../Components/Layout';
import {postsData} from './postsData.js'
import { useState, useEffect } from 'react';
import {Link} from 'react-router-dom';
import { getPosts } from '../../services/posts';
import './Home.css'

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
      <h2>Spitter Feed</h2>
      {posts.map((post)=> (
        <div key={post.id}>
          <h4>Title: {post.title}</h4>
          <p>Post: {post.body}</p>
          <Link to={`/posts/${post.id}/comments`}>
            <button>Comments</button>
          </Link>
        </div>
      ))}
      </div>
    </Layout>
  )
}