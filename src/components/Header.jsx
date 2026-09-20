import { Link } from 'react-router-dom'

let AppName = "WebJSXTest"

const Header = () => {
  return (
    <header className="header-class" id="header-id">
        <div className="appname-class" id="appname-id">
            <Link to="/">❇️ {AppName}</Link>
        </div>
        <nav className="navbar-class" id="navbar-id" draggable="false">
            <ul className="navbar-list-class" id="navbar-list-id" draggable="false">
                <li className="navbar-list-class-home" draggable="false">
                    <Link to="/home" draggable="false">🏠 Home</Link>
                </li>
                <li className="navbar-list-class-info" draggable="false">
                    <Link to="/info" draggable="false">ℹ️ Information</Link>
                </li>
                <li className="navbar-list-class-form" draggable="false">
                    <Link to="/form" draggable="false">💗 Form</Link>
                </li>
            </ul>
        </nav>
    </header>
  )
}

export default Header