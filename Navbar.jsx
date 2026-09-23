import "./Navbar.css"

function Navbar({ siteName }) {
  return (
    <nav className="navbar">
      <div className="navbar-logo">{siteName}</div>
      <ul className="navbar-links">
        <li><a href="#home">Home</a></li>
        <li><a href="#destinations">Destinations</a></li>
        <li><a href="#why-us">Why Us</a></li>
        <li><a href="#footer">Contact</a></li>
      </ul>
    </nav>
  )
}

export default Navbar
