import { Link } from 'react-router-dom';
import { useState } from 'react';

export default function Signin() {
  const [formData, setFormData]= useState({
    "username": "",
    "password": "",
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
          type="password"
          placeholder="Enter Your Password"
          name="password"
          value={formData.password}
          onChange={handleChange}
        />
        
        <button type="submit">Submit</button>
      </form>
    <nav className="signup">
      <Link to='/register'><button id='my-profile-butt'>Register Here!</button></Link>
    </nav>
  </div>
  )
}