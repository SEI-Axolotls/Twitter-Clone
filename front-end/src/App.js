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

export default function App() {
  const [user, setUser] = useState({image:"https://www.seekpng.com/png/detail/73-730482_existing-user-default-avatar.png"});

  return (
    <div className="Spitter">

      <Routes>
        <Route path="/signin" element={<Signin />} />
        <Route path="/register" element={<Signup />} />
        <Route path="/logout" element={<Logout setUser={setUser}/>} />
        <Route path="/myprofile" element={<MyProfile user={user}/>} />
        <Route path="/" element={<Home user={user}/>} />
        <Route path="/posts" element={<Post user={user}/>} />
        <Route path="/posts/:post_id/comments" element={<Detail user={user}/>} />
        <Route path="/users/:user_id" element={<User user={user}/>} />
    </Routes>
    </div>
  );
}
