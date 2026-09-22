import { Link } from 'react-router-dom'
import styles from './Header.module.css'

const AppName = "WebJSXTest"

const Header = () => {
  return (
    <header
    className={styles['header-container__main']}
    id="header-container__main">

        <div
        className={styles['header-container__appname']}
        id="header-container__appname">

            <Link
            to="/">❇️ {AppName}
            </Link>
        </div>

        <nav
        className={styles['navbar-nav__main']}
        id="navbar-nav__main"
        draggable="false">

            <ul
            className={styles["navbar-ul__list"]}
            id="navbar-ul__list"
            draggable="false">

                <li
                className="navbar-li__home"
                id="navbar-li__home"
                draggable="false">

                    <Link
                    to="/home"
                    draggable="false">🏠 Home
                    </Link>
                </li>

                <li
                className="navbar-li__info"
                id="navbar-li__info"
                draggable="false">

                    <Link
                    to="/info"
                    draggable="false">ℹ️ Information
                    </Link>
                </li>

                <li
                className="navbar-li__form"
                id="navbar-li__form"
                draggable="false">

                    <Link
                    to="/form"
                    draggable="false">💗 Form
                    </Link>
                </li>
            </ul>
        </nav>
    </header>
  )
}

export default Header