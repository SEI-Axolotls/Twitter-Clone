<<<<<<< HEAD
// import { Link } from 'react-router-dom';
import React, { useState, useEffect, useRef } from "react";

export default function SearchUser() {
const inputRef = useRef(null);

  //event handler to search data for user_id based on username inputted into search bar
  //
  // '/users/:user_id'

  return (
    <div className='search-user'>
      <input type='text' placeholder='Search User'></input>
=======
import { Link } from 'react-router-dom';
export default function SearchUser({ searchQuery, setSearchQuery }) {

    return (
        <div className='search-user'>
            {/* <input type='text' placeholder='Search User'></input> */}
            {/* <Link to='/users/:user_id'><button id='search-butt'>Search User</button></Link> */}
>>>>>>> 4de17c8bc55d2565c54c4b2a77c4649eedf044b6
            {/* <Link to=`/users/${user_id}`><button id='search-butt'>Search User</button></Link> */}

            <form action="/" method="get">
                <input
                    value={searchQuery}
                    onInput={e => setSearchQuery(e.target.value)}
                    type="text"
                    id="user-search"
                    placeholder="Search Users"
                />
                <button type="submit">Search</button>
            </form>

        </div>
    )
}