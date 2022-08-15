import { useState } from 'react';
import { Link } from 'react-router-dom';


export default function Signup() {
  const [formData, setFormData]= useState({
    "username": "",
    "password": "",
    "re_password": "",
    "email":"",
  })
  
  const handleSubmit = () => {} 
  
  const handleChange = (e) => {
    const {name, value} = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value

    }))
  }


  return (
    <div>
    <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Add Your Username"
          name="username"
          value={formData.username}
          onChange={handleChange}
          />
        <input
          type="text"
          placeholder="Add Your Email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          />
        <input
          type="password"
          placeholder="Enter Your Password"
          name="password"
          value={formData.password}
          onChange={handleChange}
        />
        <input
          type="password"
          placeholder="Confirm Your Password"
          name="re_password"
          value={formData.re_password}
          onChange={handleChange}
        />
        <button type="submit">Submit</button>
      </form>
    <nav className="signup">
      <Link to='/signin'><button id='my-profile-butt'>Log In!</button></Link>
    </nav>
  </div>
  )
}