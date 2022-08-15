import Layout from '../../Components/Layout';
import Post from '../Post/Post';

export default function Detail({ user }) {
  return (
  <Layout user={user}>
  
      <div className='detail-container'>
        <p>{user.posts}</p>
      <Post />
      </div>
     </Layout> 
)
}