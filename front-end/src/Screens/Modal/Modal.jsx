import React, { useState, useEffect } from "react";
import { getUser, changeUserInfo } from '../../services/users.js'
import './Modal.css';

export default function Modal({ user, setUser, setModalData }) {
  // const [image, setImage] = useState('');
  // const [name, setName] = useState('');
  // const [email, setEmail] = useState('');
  // const [bio, setBio] = useState('');
  

  // handleChange() {
  //   setUserProfile to be equal to whatever is typed
  // }
  
  // onSubmit() {
  //   send the userProfile from the state back to the database
  // }
 
  // const updateUserInfo = async (e) => { 
  //   e.preventDefault()
  //   await changeUserInfo(formData)
  //   let response = await getUser()
  //   setUser(response)
   
      // let handleChange = (e) => {
      //   e.preventDefault()
      //   setModalData({ value: e.target.value })
      // }
    
 
  // const handleChange = (e) => {
  //     const { name, value } = e.target
  //     setUser((prev) => ({
  //         ...prev,
  //         [name]: value

  //     }))
  // }
  // let addImage =(e)=> {
  //        setUserProfile(URL.createObjectURL(e.target.files[0]));
  //  }

  let handleClick = () => {
    setModalData({
   
      isVisible: false,
    })
  }

  
  

  return (
    <div className="Modal">
    <div className="Modal-container">
      
      <form >
        hiiiiii
                {/* <img src={file} />
        <input type="file" id="files"
          value={userProfile.profile_pic_url}
          onChange={addImage} />
                <br />
                <label for="files">Add/ Change Photo</label>
                <br /> */}
                {/* <input
                    type="text"
                    placeholder="Change Your Email"
                    name="email"
                    value={userProfile.email}
                    onChange={handleChange}
                />
                <br /> */}
                {/* <input
                    type="text"
                    placeholder="Change Your Username"
                    name="username"
                    value={userProfile.username}
                    onChange={handleChange}
                />
        <br />
        <input
                    type="text"
                    placeholder="Change Your Bio"
                    name="bio"
                    value={userProfile.bio}
                    onChange={handleChange}
                />
        <br /> */}
        {/* <button type="submit">Submit</button> */}
        <button onClick={handleClick}>Close</button> 

        </form>
      </div>
    </div>
  )
}