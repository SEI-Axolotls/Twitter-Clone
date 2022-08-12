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
        <Route path="/home" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/post" element={<Post />} />
        <Route path="/comment" element={<CommentDetail />} />
        <Route path="/friend" element={<Friend />} />
    </Routes>
    </div>
  );
}


