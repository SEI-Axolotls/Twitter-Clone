import Nav from './Nav.jsx'
import Header from './Header.jsx'
import './Layout.css'

export default function Layout ({ children, user }){
  return (
    <div className="layout">
      <Header user={user} />
      <Nav user={user} />
      <div className="layout-container">
        {children}
      </div>
    </div>
  )
}