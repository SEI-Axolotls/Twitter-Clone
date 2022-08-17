import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { loginUser, getUser } from '../../services/users';
import "../Signup/loginregister.css"

export default function Signin({setUser}) {
    const [formData, setFormData] = useState({
        "username": "",
        "password": "",
    })

    let navigate = useNavigate()

    const handleSubmit = async (e) => { 
        e.preventDefault()
        await loginUser(formData)
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
        <div class="signin-container">
            <h1 class="spitter-app">Spit<span>ter</span></h1>
            <h5>Connect with people around the world!</h5>
        <div className="signin-box">
            <h2>Login</h2>
            <form class="register-login-form" onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Enter Username..."
                    name="username"
                    value={formData.username}
                    onChange={handleChange}/>
                <input
                    type="password"
                    placeholder="Enter Password..."
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                />
                <input 
                    type="submit"
                    value="Login"/>    
            </form>
            <nav className="signup">
                <div>Need an account? <Link to='/register' class="nav-auth">Register</Link></div>
            </nav>
        </div>
        </div>
    )
}
