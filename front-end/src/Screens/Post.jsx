import PostComponent from '../Components/Post.jsx'
import NavComponent from '../Components/Nav.jsx'
import AsideComponent from '../Components/Aside.jsx'
import './Post.css'

const Post = () =>{
    return (
        <div className = "post-screen-container">
              <NavComponent/>
              <AsideComponent/>
              <PostComponent/>
        </div>
    )
}

export default Post