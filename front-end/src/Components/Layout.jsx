import Nav from './Nav.jsx'
import Header from './Header.jsx'

export default function Layout ({ children, user }){
  return (
    <div className="layout">
      <Header />
      <Nav user={user} />
      <div className="layout-container">
        {children}
      </div>
    </div>
  )
}