import Layout from '../../Components/Layout';

export default function Home({ user}) {
  return (
    <Layout user={user}>
    <div className='home'>
      <h1>Hi</h1>
      </div>
    </Layout>
  )
}