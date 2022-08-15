import SearchUser from './SearchUser';


export default function Header({user}) {
  return (
    <div className='header'>
      <header className="title">
        <h1>Spitter</h1>
        <img src="" alt="logo" />
      </header>
      {user && <SearchUser />}
    </div>
  )
}