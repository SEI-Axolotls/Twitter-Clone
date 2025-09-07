import { Link } from 'react-router-dom';
import './Nav.css'
import './Layout.css'

export default function Nav({ user }) {
  const authenticatedOptions = (
    < >
      <Link to='/myprofile'id='nav-my-profile'><button class= "nav-magenta">My Profile</button></Link>
      <Link to='/posts' id='nav-post'><button class ="nav-purple">Post</button></Link>
      <Link to='/logout' id='nav-logout'><button class ="nav-orange">Logout</button></Link>

    </>
  ) 

  const unauthenticatedOptions = (
    <>
      <Link to='/signin' id='nav-signin'><button class="nav-orange">Sign In</button></Link>
      <Link to='/register' id='nav-register'><button class ="nav-purple">Register</button></Link>
    </>
  )
  
  const alwaysOptions = (
    <>
          <Link to='/' id='nav-home'><button class ="nav-blue">Home </button></Link>

    </>
    )

  return (
    <nav className="navbar">
      {/* Fix image for proper user profile image */}
      {/* {user ? <img src={user.image} alt="user profile" /> : null}  */}
      <div>
      {/* <button id="hamburger-icon">&#9776;</button> */}
        {alwaysOptions}
        {user ? authenticatedOptions : unauthenticatedOptions}
      </div>

    </nav>
  )
}