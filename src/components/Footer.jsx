let AutorName = "CiszukoAntony"
let CopyYear = 2026

const Footer = () => {
  return (
    <footer className="footer-class" id="footer-id">
        <div className="copyright-class" id="copyright-id">
            <p className="copyright-text-class" id="copyright-text-id">
                &copy; {AutorName} Copyright {CopyYear}
            </p>
        </div>
    </footer>
  )
}

export default Footer