import { useState } from 'react';
import { Link } from 'react-router-dom';
import SearchUser from '../../Components/Header';

export default function Signup() {
  // const [file, setFile] = useState();
  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');
  const [formData, setFormData] = useState({
        "username": "",
        "password": "",
        "re_password": "",
        "email": "",
    })

    const handleSubmit = () => { }

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData((prev) => ({
            ...prev,
            [name]: value
        }))
    }

    // function imgPreview(e) {
    //     setFile(URL.createObjectURL(e.target.files[0]));
    // }

    return (
        <div className="signup-container">
            <SearchUser />
            <nav className="signup">
                <Link to='/signin'><button id='my-profile-butt'>Log In!</button></Link>
            </nav>
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

        </div>
    )
}
