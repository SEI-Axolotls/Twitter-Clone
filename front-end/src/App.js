import {useState, useEffect} from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './Screens/Home/Home';
import Signin from './Screens/Signin/Signin';
import Signup from './Screens/Signup/Signup';
import MyProfile from './Screens/MyProfile/MyProfile';
import Post from './Screens/Post/Post';
import Detail from './Screens/Detail/Detail';
import User from './Screens/User/User';
import './App.css';
import Logout from './Components/Logout';
import {getUser} from './services/users.js';

export default function App() {
  const [user, setUser] = useState(null);
  const [toggle, setToggle] = useState(false);
  //{image:"https://www.seekpng.com/png/detail/73-730482_existing-user-default-avatar.png"}

  useEffect(() => {
    const fetchUser = async()=>{
      let response = await getUser()
      setUser(response)
    }
    fetchUser()
  },[])

  return (
    <div className="Spitter">

      <Routes>
        <Route path="/signin" element={<Signin setUser={setUser}/>} />
        <Route path="/register" element={<Signup setUser={setUser} />} />
        <Route path="/logout" element={<Logout setUser={setUser}/>} />
        <Route path="/myprofile" element={<MyProfile setToggle={setToggle} user={user}/>} />
        <Route path="/" element={<Home toggle={toggle} user={user}/>} />
        <Route path="/posts" element={<Post setToggle={setToggle} user={user}/>} />
        <Route path="/posts/:post_id/comments" element={<Detail setToggle={setToggle} toggle={toggle} user={user}/>} />
        <Route path="/users/:user_id" element={<User user={user}/>} />
    </Routes>
    </div>
  );
}
