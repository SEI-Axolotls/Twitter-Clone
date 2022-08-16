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
            {/* <Link to=`/users/${user_id}`><button id='search-butt'>Search User</button></Link> */}

      </div>
  )
}