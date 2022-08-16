import SearchUser from './SearchUser';
import { useState } from 'react';

export default function Header({ user }) {
    const { search } = window.location;
    const query = new URLSearchParams(search).get('user');
    const [searchQuery, setSearchQuery] = useState(query || '');

    const users = [
        { id: '1', name: 'Katy Perry', user: 'katyperry', post:'You wanna pizza me? Back in Vegas this week! 🍄🍕' },
        { id: '2', name: 'Justin Bieber', user: 'justinbieber', post: 'If I could be any animal I would be a liger.. Cuz there sweet..'},
        { id: '3', name: 'Taylor Swift', user: 'taylorswift13', post: 'PS I wrote this tweet all by myself in case you were wondering 😑' },
        { id: '4', name: 'Kim Kardashian', user: 'KimKardashian', post: 'I do my own heavy lifting 😝' },
        { id: '5', name: 'Kanye West', user: 'kanyewest', post: 'KANYE 2024' }
    ];

    const filterUsers = (users, query) => {
        if (!query) {
            return users;
        }

        return users.filter((user) => {
            const userName = user.name.toLowerCase();
            return userName.includes(query);
        })
    }
    const filteredUsers = filterUsers(users, searchQuery);

    return (
        <div className='header'>
            <header className="title">
                <h1>Spitter</h1>
                <img src="" alt="logo" />
            </header>
            {user && <SearchUser searchQuery={searchQuery}
                setSearchQuery={setSearchQuery} />
            }
            <ul>
                {filteredUsers.map((post) => (
                    <li key={post.id}> Name: {post.name}
                    <li> Username: {post.user} </li> 
                    <li>Post: {post.post}</li><br/>
                    </li>
                    ))}
            </ul>

        </div>
    )
}