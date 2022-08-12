import './Post.css'
import Layout from '../../Components/Layout';

export default function Post({user}){
  return (
     <Layout user={user}>
        <div className = "post-screen-container">
      <h1>Post Form</h1>
      </div>
      </Layout>
    )
}
