import { Link } from 'react-router-dom';

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
      {user ? <img src={user.image} /> : null}
      <div>
        {alwaysOptions}
        {user ? authenticatedOptions : unauthenticatedOptions}
      </div>

    </nav>
  )
}