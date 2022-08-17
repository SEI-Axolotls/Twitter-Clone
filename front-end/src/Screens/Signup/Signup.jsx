import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { registerUser, getUser } from '../../services/users.js';

export default function Signup({ setUser }) {
    const [formData, setFormData] = useState({
        "username": "",
        "password": "",
        "re_password": "",
        "email": "",
    })

    let navigate = useNavigate()

    const handleSubmit = async (e) => {
        e.preventDefault()
        await registerUser(formData)
        let response = await getUser()
        setUser(response)
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
        <div className="signup-container">
            <h1 class="spitter-app">Spit<span>ter</span></h1>
            <h5>Connect with people around the world!</h5>
            <div class="signin-box">
            {/* <img src="https://i.imgur.com/f6RG6Ih.png" alt="logo" /> */}
            <h2>Sign Up</h2>
            <form onSubmit={handleSubmit} class="register-login-form">
                {/* <img src={file} />
                <input type="file" id="files" onChange={imgPreview}/>
                <br />
                <label for="files">Add Photo</label> */}
                <br />
                <input
                    type="text"
                    placeholder="Add Your Email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                />
                <br />
                <input
                    type="text"
                    placeholder="Add Your Username"
                    name="username"
                    value={formData.username}
                    onChange={handleChange}
                />
                <br />
                <input
                    type="password"
                    placeholder="Enter Your Password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                />
                <br />
                <input
                    type="password"
                    placeholder="Confirm Your Password"
                    name="re_password"
                    value={formData.re_password}
                    onChange={handleChange}
                />
                <br />
                <button type="submit">Submit</button>
            </form>
            <nav className="signup">
                <div>Already have an account? <Link to='/signin'><a id='my-profile-butt' className="nav-auth">Log In!</a></Link>
                </div>
            </nav>
        </div>
        </div>
    )
}
