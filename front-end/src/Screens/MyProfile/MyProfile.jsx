import Layout from "../../Components/Layout";
import { useState, useEffect } from "react";
import { deletePost } from "../../services/posts.js";
import "./MyProfile.css";
import Modal from "../Modal/Modal";
import { Link } from "react-router-dom";

export default function MyProfile({ user, setToggle }) {
  const [userProfile, setUserProfile] = useState(user.profile);
  const [userPosts, setUserPosts] = useState(user.posts);
  const [modalData, setModalData] = useState({
    isVisible: false,
  });

  let handleClick = () => {
    setModalData({
      isVisible: true,
    });
  };

  let handleDelete = async (id)=> {
    await deletePost(id)
  }

  return (
    <Layout user={user}>
      <div className="my-profile-container">
        <div className="profile-img-container">
          <img
            className="profile-pic"
            src={userProfile.profile_pic_url}
            alt="user profile"
          />
          <div>
            <h2>Username: {userProfile.name}</h2>
            <h2>Email: {userProfile.email}</h2>
          </div>
        </div>
        <div>Bio: {userProfile.bio}</div>

        <button onClick={handleClick}>Update Profile</button>
        {modalData.isVisible ? (
          <Modal
            setToggle={setToggle}
            userProfile={userProfile}
            setModalData={setModalData}
          />
        ) : (
          ""
        )}
        <div>
          {userPosts.map((post)=>(
            <div key={post.id}>
              <h3> {post.title}</h3>
              <p>{post.body}</p>
              <Link to={`/posts/${post.id}/edit`}>
                <button>Edit</button>
              </Link>
              <button onClick={() => handleDelete(post.id)}>Delete</button>
            </div> 
          ))}
        </div>
      </div>
    </Layout>
  );
}
