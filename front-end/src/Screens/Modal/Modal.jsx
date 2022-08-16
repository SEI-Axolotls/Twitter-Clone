import React, { useState, useEffect } from "react";
import { getUser, changeUserInfo } from "../../services/users.js";
import "./Modal.css";

export default function Modal({ userProfile, setModalData, setToggle }) {
  const [formData,setFormData] = useState({
    name: userProfile.name, 
    email: userProfile.email,
    profile_pic_url: userProfile.profile_pic_url,
    bio: userProfile.bio,
  })

  let handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({
        ...prev,
        [name]: value

    }))
  };

  let handleSubmit = async (e) => {
    e.preventDefault();
    await changeUserInfo(formData, userProfile.id);
    setToggle(prev => !prev)
    handleClick()
    };
  // let addImage =(e)=> {
  //        setUserProfile(URL.createObjectURL(e.target.files[0]));
  //  }

  let handleClick = () => {
    setModalData({
      isVisible: false,
    });
  };

  return (
    <div className="Modal">
      <div className="Modal-container">
        <form onSubmit ={handleSubmit}>
        <input
            type="text"
            placeholder="Add a Photo"
            name="profile_pic_url"
            value={formData.profile_pic_url}
            onChange={handleChange}
          />
          <input
            type="text"
            placeholder="Change Your Email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
          <br />
          <input
            type="text"
            placeholder="Change Your Username"
            name="username"
            value={formData.name}
            onChange={handleChange}
          />
          <br />
          <input
            type="text"
            placeholder="Change Your Bio"
            name="bio"
            value={formData.bio}
            onChange={handleChange}
          />
          <br />
          <button type="submit">
            Submit
          </button>
          <button onClick={handleClick}>Close</button>
        </form>
      </div>
    </div>
  );
}
