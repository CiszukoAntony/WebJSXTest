import styles from './Footer.module.css'

const DevName = "Ciszuko Antony"
let CopyYear = 2026

const Footer = () => {
  return (
    <footer
    className={styles['footer-container__main']}
    id="footer-container__main">

        <section
        className="footer-section-copyright__main"
        id="footer-section-copyright__main">

            <p
            className="footer-p-copyright__text"
            id="footer-p-copyright__text">
                &copy; {DevName} Copyright {CopyYear}
            </p>

        </section>
    </footer>
  )
}

export default Footer