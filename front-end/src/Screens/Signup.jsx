import { Link } from 'react-router-dom';

export default function Signup() {
  return (
    <nav className="signup">
      <Link to='/myprofile'><button id='my-profile-butt'>Signup!</button></Link>
    </nav>
  )
}