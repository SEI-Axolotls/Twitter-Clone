import Layout from '../../Components/Layout';

export default function MyProfile({user}) {
  return (
      <Layout user={user}>
      <div className='my-profile-container'>
        
              <h2>Username:</h2>
              <h2>Email:</h2>
              <h2>Bio:</h2>
            </div>
         </Layout>
  )
}