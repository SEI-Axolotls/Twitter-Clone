import React from "react";
import './Modal.css';

export default function Modal({ userProfile, setModalData }) {
  
  let handleClick = () => {
    setModalData({
      userProfile: {},
      isVisible: false,
    })
  }

  return (
    <div className="modal-container">
      <div className="modal-content">
        <img src={userProfile.profile_pic_url} alt="user profile"></img> 
        <div className='ProfileInfo'>
          <ul>
            <li>Username: {userProfile.name}</li>
            <li>Email: {userProfile.email}</li>
            <li>Bio: {userProfile.bio}</li>
          </ul>
          <button onClick={handleClick}>Close</button>
        </div>
      </div>
    </div>
  )
}