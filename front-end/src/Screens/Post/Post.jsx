import PostComponent from '../../Components/PostComponent.jsx'
import './Post.css'
import Layout from '../../Components/Layout';

export default function Post({user}){
  return (
     <Layout user={user}>
        <div className = "post-screen-container">
              <PostComponent />
      </div>
      </Layout>
    )
}
