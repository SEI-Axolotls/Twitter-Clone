import { Routes, Route } from 'react-router-dom';
import Home from './Screens/Home';
import Signin from './Screens/Signin';
import Signup from './Screens/Signup';
import Profile from './Screens/Profile';
import Post from './Screens/Post';
import CommentDetail from './Screens/CommentDetail';
import Friend from './Screens/Friend';
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


