import { Link } from 'react-router-dom';

export default function SearchUser() {
  return (
    <div className='search-user'>
      <input type='text' placeholder='Search User'></input>
            {/* <Link to='/users/:user_id'><button id='search-butt'>Search User</button></Link> */}

      </div>
  )
}