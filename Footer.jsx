import "./Footer.css"

function Footer({ siteName }) {
  return (
    <footer className="footer" id="footer">
      <div className="footer-top">
        <div className="footer-brand">
          <h3>{siteName}</h3>
          <p>Your journey starts here. Explore the world with ease.</p>
        </div>
        <div className="footer-links">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#destinations">Destinations</a></li>
            <li><a href="#why-us">Why Us</a></li>
          </ul>
        </div>
        <div className="footer-contact">
          <h4>Contact</h4>
          <p>info@wanderway.com</p>
          <p>+92 300 1234567</p>
          <p>Rawalpindi, Pakistan</p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© 2025 {siteName}. All rights reserved.</p>
      </div>
    </footer>
  )
}

export default Footer
