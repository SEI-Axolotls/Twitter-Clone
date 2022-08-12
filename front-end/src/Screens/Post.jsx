import Post from '../Components/Post.jsx'
import Nav from '../Components/Nav.jsx'
import AsideComponent from '../Components/Aside.jsx'
import './Post.css'

export default function Post(){
  return (
    <div className="post">
      <Nav />
        <div className = "post-screen-container">
              {/* <AsideComponent/> */}
              <Post />
      </div>
    </div>
    )
}
