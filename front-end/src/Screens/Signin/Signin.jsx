import { Link } from 'react-router-dom';

export default function Signin() {
  return (
    <nav className="signin">
      <Link to='/myprofile'><button id='myprofile-butt'>Sign In to Profile</button></Link>
      <Link to='/register'><button id='register-butt'>Register</button></Link>
    </nav>
  )
}