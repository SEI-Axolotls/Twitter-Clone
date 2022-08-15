import Layout from '../../Components/Layout';
import Bio from '../../Components/Bio';
import React { useEffect } from 'react';


export default function MyProfile({user}) {
  
  function onSubmit(data) {
    return isAddMode
        ? createUser(data)
        : updateUser(id, data);
}

  useEffect(() => {
    if (!isAddMode) {
        // get user and set form fields
        userService.getById(id).then(user => {
            const fields = ['img', 'username', 'email', 'bio'];
            fields.forEach(field => setValue(field, user[field]));
        });
    }
}, []);

  
  return (
      <Layout user={user}>
      <div className='my-profile-container'>
        <h2>Username: </h2>
        <h2>Email:</h2>
        <div>Bio:
          <Bio />
        </div>
      </div>
         </Layout>
  )
}