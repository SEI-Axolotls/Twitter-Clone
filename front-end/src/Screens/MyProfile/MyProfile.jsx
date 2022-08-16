import Layout from '../../Components/Layout';
import { useState, useEffect } from 'react';
import { getUser } from '../../services/users.js'
import './MyProfile.css';
import Modal from '../Modal/Modal';


export default function MyProfile({ user, setToggle }) {
const [userProfile, setUserProfile] = useState(user.profile)
const [userPosts, setUserPosts] =useState(user.posts) 
  const [modalData, setModalData] = useState({
    isVisible: false
  })

  let handleClick = () => {
    setModalData({
      isVisible: true
  })
  }

  return (
    <Layout user={user}>
      <div className='my-profile-container'>
        <div className="profile-img-container">
          <img className="profile-pic" src={userProfile.profile_pic_url} alt="user profile" />
          <div>
            <h2>Username: {userProfile.name}</h2>
            <h2>Email: {userProfile.email}</h2>
          </div>
        </div>
        <div>
          Bio: {userProfile.bio}
        </div>
        <div>
          {/* map through user posts */}
        </div>
        <button onClick={handleClick}>Update Profile</button>
          {modalData.isVisible ? (
            <Modal setToggle={setToggle} userProfile={userProfile} setModalData={setModalData} />
          ) : (
            ''
          )}
      </div>
    </Layout>
  )
}