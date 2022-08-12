import SearchUser from './SearchUser';


export default function Header() {
  return (
    <div className='header'>
      <header className="title">
        <h1>Spitter</h1>
        <img src="" alt="logo" />
      </header>
      <SearchUser />
    </div>
  )
}