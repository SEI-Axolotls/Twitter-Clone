import Detail from '../Detail/Detail'
import Layout from '../../Components/Layout';
import { useState, useEffect } from 'react';
import { getUser } from '../../services/users.js'
import './User.css';


export default function User({ user }) {
  const [userProfile, setUserProfile] = useState({})

  const fetchUserProfile = async () => {
    const userProfileData = await getUser()
    setUserProfile(userProfileData)
  }

  useEffect(() => {
    // GET request to '/user/profile' with Token in header
    // fetchUserProfile()

    setUserProfile({
      "id": 1,
      "name": "Carlton James Jr.",
      "email": "james@email.com",
      "profile_pic_url": "https://scontent-lga3-1.xx.fbcdn.net/v/t31.18172-8/12291292_10200891830853426_784032356464940917_o.jpg?_nc_cat=107&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=d-yJI152rjQAX9Cs8cM&_nc_ht=scontent-lga3-1.xx&oh=00_AT-pL6bCDw2RqjFOS3_5wbRxIufvF7MEVEceK5cXOj1yiA&oe=6320D66D",
      "bio": "I am the greatest.",
      "user": 2
    })
  }, [])

  return (
    <Layout user={user}>
      <div className='user-container'>
        <div className="profile-img-container">
          <img className="profile-pic" src={userProfile.profile_pic_url} alt="user profile" />
          <div>
            <h2>Username: {userProfile.name}</h2>
            <h2>Email: {userProfile.email}</h2>
          </div>
          <div>
          Bio: {userProfile.bio}
          {/* <Detail /> */}
          {/* <Link to={`/posts/${post._id}/comments`}></Link>
            <button>Comments</button> */}
          </div>
        </div>
      </div>
    </Layout>
  )
}
