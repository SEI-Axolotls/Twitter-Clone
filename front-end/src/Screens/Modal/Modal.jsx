import React, { setState } from "react";
import './Modal.css';

export default function Modal({ userProfile, setUserProfile, modalData, setModalData }) {
  // const [image, setImage] = useState('');
  // const [name, setName] = useState('');
  // const [email, setEmail] = useState('');
  // const [bio, setBio] = useState('');
  

  let handleChange = (e) => {
    e.preventDefault()
    setUserProfile({ value: e.target.value })
  }

  // const handleChange = (e) => {
  //     const { name, value } = e.target
  //     setUserProfile((prev) => ({
  //         ...prev,
  //         [name]: value

  //     }))
  // }
  // let addImage =(e)=> {
  //        setUserProfile(URL.createObjectURL(e.target.files[0]));
  //  }

  let handleClick = (e) => {
    setModalData({
   
      isVisible: false,
    })
  }

  // let handleSubmit = (e) => {
  //   e.preventDefault()
  // }
  // handleChange() {
  //   setUserProfile to be equal to whatever is typed
  // }
  
  // onSubmit() {
  //   send the userProfile from the state back to the database
  // }
  

  return (
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
      </form>
      <button onClick={handleClick}>Close</button> 
    </div>
  )
}