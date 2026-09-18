import { Link } from 'react-router-dom'

let AppName = "WebJSXTest"

const Header = () => {
  return (
    <header className="header-class" id="header-id">
        <div className="appname-class" id="appname-id">
            <Link to="/">❇️ {AppName}</Link>
        </div>
        <nav className="navbar-class" id="navbar-id">
            <ul className="navbar-list-class" id="navbar-list-id">
                <li className="navbar-list-class-home">
                    <Link to="/home">🏠 Home</Link>
                </li>
                <li className="navbar-list-class-info">
                    <Link to="/info">ℹ️ Information</Link>
                </li>
                <li className="navbar-list-class-form">
                    <Link to="/form">💗 Form</Link>
                </li>
            </ul>
        </nav>
    </header>
  )
}

export default Header