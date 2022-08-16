import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {registerUser, getUser} from '../../services/users.js';
import "./loginregister.css"

export default function Signup({setUser}) {
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
             <h1 class="spitter-app">Spit<span>ter</span></h1>          <h5>Connect with people around the world!</h5>
             <div class="signin-box">    
            <h2>Register</h2>
            <form onSubmit={handleSubmit} class="register-login-form">
                <input
                    type="text"
                    placeholder="Enter Email..."
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                />
                <br />
                <input
                    type="text"
                    placeholder="Enter Username..."
                    name="username"
                    value={formData.username}
                    onChange={handleChange}
                />
                <br />
                <input
                    type="password"
                    placeholder="Enter Password..."
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                />
                <input
                    type="password"
                    placeholder="Confirm Password..."
                    name="re_password"
                    value={formData.re_password}
                    onChange={handleChange}
                />
                <input type="submit" value="Register"/>
            </form>
            <nav className="signup">
                <div>Already have an account? <Link to='/signin' class="nav-auth">Log In!</Link>
                </div>
            </nav>
             </div>
        </div>
    )
}
