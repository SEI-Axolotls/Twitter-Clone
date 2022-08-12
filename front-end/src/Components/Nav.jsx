import { Link } from 'react-router-dom';


export default function Nav() {
  return (
    <nav className="navbar">
      <Link to='/'><button id='logout-butt'>Logout</button></Link>
      <Link to='/myprofile'><button id='my-profile-butt'>My Profile</button></Link>
      <Link to='/home'><button id='home-butt'>Home</button></Link>
      <Link to='/post'><button id='post-butt'>Post</button></Link>
    </nav>
  )
}