import { Link } from 'react-router-dom';
import { useState } from 'react';
import SearchUser from '../../Components/Header';
export default function Signin() {
    const [formData, setFormData] = useState({
        "username": "",
        "password": "",
    })

    const handleSubmit = () => { }

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData((prev) => ({
            ...prev,
            [name]: value

        }))
    }


    return (
        <div className="signin-container">
            
            {<SearchUser/>}
            <h1>Sign in</h1>
            <h2>(Description of Spitter)</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Username"
                    name="username"
                    value={formData.username}
                    onChange={handleChange}
                />
                <br></br>
                <input
                    type="password"
                    placeholder="Password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                />
                <br></br>
                <button type="submit">Submit</button>
            </form>
            <nav className="signup">
                <Link to='/register'><button id='my-profile-butt'>Register Here!</button></Link>
            </nav>
        </div>
    )
}