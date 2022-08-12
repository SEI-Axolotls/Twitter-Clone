import Nav from '../Components/Nav';
import SearchUser from '../Components/SearchUser'

export default function User() {
  return (
    <div className='user'>
      <Nav />
      <div className='user-container'>
        
              <h2>Username:</h2>
              <h2>Email:</h2>
              <h2>Bio:</h2>
            </div>
         
    </div>
  )
}