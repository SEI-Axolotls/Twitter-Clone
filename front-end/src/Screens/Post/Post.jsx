import { useState } from 'react';
import './Post.css'
import Layout from '../../Components/Layout';

export default function Post({ user }) {
    const [post, setPost] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        setPost(e.target[0].value)
    }

    return (
        <Layout user={user}>
            <div className="post-screen-container">
                <form onSubmit={handleSubmit}>
                    <h1>Posts</h1>
                    <p>{post}</p>
                    <input type="text" placeholder="Add Post"/>
                    <br />
                    <button type="submit" className="">POST</button>
                </form>
            </div>
        </Layout>
    )
}
