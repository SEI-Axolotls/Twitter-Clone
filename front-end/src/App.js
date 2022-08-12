import { Routes, Route } from 'react-router-dom';
import Home from './Screens/Home';
import Signin from './Screens/Signin';
import Signup from './Screens/Signup';
import MyProfile from './Screens/MyProfile';
import Post from './Screens/Post';
import Detail from './Screens/Detail';
import User from './Screens/User';
import './App.css';

export default function App() {
  return (
    <div className="Spitter">
      <Routes>
        <Route path="/" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/myprofile" element={<MyProfile />} />
        <Route path="/home" element={<Home />} />
        <Route path="/posts" element={<Post />} />
        <Route path="/posts/:post_id/comments" element={<Detail />} />
        <Route path="/users/:user_id" element={<User />} />
    </Routes>
    </div>
  );
}


