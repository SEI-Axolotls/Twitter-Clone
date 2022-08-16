import { useState, useEffect } from 'react';
import './Post.css'
import Layout from '../../Components/Layout';
import {createPost} from '../../services/posts.js'
import { useNavigate } from 'react-router-dom';

export default function Post({ user, setToggle }) {
    const [formData, setFormData] = useState({
        title: "",
        body: ""
    })

    let navigate = useNavigate()

    useEffect(() => {
        if(!user){
            navigate("/register")
        }
    },[])

    const handleSubmit = async (e) => {
        e.preventDefault()
        await createPost(formData)
        setToggle(prev => !prev)
        navigate("/")
    }

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData((prev) => ({
            ...prev,
            [name]: value
        }))
    }

    return (
        <Layout user={user}>
            <div className="post-screen-container">
                <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Title"
                    name="title"
                    value={formData.title}
                    onChange={handleChange}
                />
                <input
                    type="text"
                    placeholder="Content"
                    name="body"
                    value={formData.body}
                    onChange={handleChange}
                />
                    <button type="submit" className="">POST</button>
                </form>
            </div>
        </Layout>
    )
}
