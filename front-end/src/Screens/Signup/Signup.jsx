import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {registerUser, getUser} from '../../services/users.js';


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
           
            
            <form onSubmit={handleSubmit}>
                {/* <img src={file} />
                <input type="file" id="files" onChange={imgPreview}/>
                <br />
                <label for="files">Add Photo</label>
                <br /> */}
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
                <Link to='/signin'><button id='my-profile-butt'>Log In!</button></Link>
            </nav>
        </div>
    )
}
