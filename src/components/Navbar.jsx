import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/images/logo.png";
import "./Navbar.css";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [sticky, setSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setSticky(window.scrollY > 80);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className={`header_navbar ${sticky ? "sticky" : ""}`}>
      <div className="container">
        <nav className="navbar">
          <Link className="navbar-brand" to="/" onClick={() => setOpen(false)}>
            <img src={logo} alt="logo" />
          </Link>

          <button
            className={`navbar-toggler ${open ? "active" : ""}`}
            onClick={() => setOpen(!open)}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>

          <div className={`nav-menu ${open ? "show" : ""}`}>
            <ul>
              <li><Link to="/" onClick={() => setOpen(false)}>Home</Link></li>
              <li><Link to="/about" onClick={() => setOpen(false)}>About</Link></li>
              <li><Link to="/services" onClick={() => setOpen(false)}>Services</Link></li>
              <li><Link to="/gallery" onClick={() => setOpen(false)}>Gallery</Link></li>
              <li><Link to="/project" onClick={() => setOpen(false)}>Project</Link></li>
              <li><Link to="/career" onClick={() => setOpen(false)}>Career</Link></li>
              <li><Link to="/contact" onClick={() => setOpen(false)}>Contact</Link></li>
            </ul>
          </div>
        </nav>
      </div>
    </div>
  );
}