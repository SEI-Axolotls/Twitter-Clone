import { Link } from 'react-router-dom';
import './Nav.css'
import './Layout.css'

export default function Nav({ user }) {
  const authenticatedOptions = (
    < >
      <Link to='/myprofile'id='nav-my-profile'>My Profile</Link>
      <Link to='/posts' id='nav-post'>Post</Link>
      <Link to='/logout' id='nav-logout'>Logout</Link>

    </>
  ) 

  const unauthenticatedOptions = (
    <>
      <Link to='/signin' id='nav-signin'>Sign In</Link>
      <Link to='/register' id='nav-register'>Register</Link>
    </>
  )
  
  const alwaysOptions = (
    <>
          <Link to='/' id='nav-home'>Home</Link>

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