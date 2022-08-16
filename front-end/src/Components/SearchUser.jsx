import { Link } from 'react-router-dom';
export default function SearchUser({ searchQuery, setSearchQuery }) {

    return (
        <div className='search-user'>
            {/* <input type='text' placeholder='Search User'></input> */}
            {/* <Link to='/users/:user_id'><button id='search-butt'>Search User</button></Link> */}

            <form action="/" method="get">
                <input
                    value={searchQuery}
                    onInput={e => setSearchQuery(e.target.value)}
                    type="text"
                    id="user-search"
                    placeholder="Search Users"
                />
                <button type="submit">Search</button>
            </form>

        </div>
    )
}