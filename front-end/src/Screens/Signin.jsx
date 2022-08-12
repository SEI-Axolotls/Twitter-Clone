import { Link } from 'react-router-dom';

export default function Signin() {
  return (
    <nav className="signin">
      <Link to='/home'><button id='signin-butt'>Sign In</button></Link>
      <Link to='/signup'><button id='signup-butt'>Sign Up</button></Link>
    </nav>
  )
}