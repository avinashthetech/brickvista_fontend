import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import logo from "../assets/images/logo.png";
import "./Header.css";

import slider1 from "../assets/images/slider_new.jpg";
import slider2 from "../assets/images/slider_new2.jpg";
import slider3 from "../assets/images/slider_new3.jpg";
import slider4 from "../assets/images/slider_new4.jpg";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [current, setCurrent] = useState(0);
  const [sticky, setSticky] = useState(false);

  const slides = [slider1, slider2, slider3, slider4];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 4500);

    return () => clearInterval(interval);
  }, [slides.length]);

  useEffect(() => {
    const handleScroll = () => {
      setSticky(window.scrollY > 80);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="header_area">
      <div className={`header_navbar ${sticky ? "sticky" : ""}`}>
        <div className="container">
          <nav className="navbar" aria-label="Main navigation">
            <Link className="navbar-brand" to="/" onClick={() => setOpen(false)}>
              <img
                src={logo}
                alt="Brick Vista Construction Private Limited logo"
              />
            </Link>

            <button
              className={`navbar-toggler ${open ? "active" : ""}`}
              onClick={() => setOpen(!open)}
              aria-label="Toggle navigation menu"
              aria-expanded={open}
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

      <section
        className="hero_area"
        style={{ backgroundImage: `url(${slides[current]})` }}
        aria-label="Brick Vista Construction hero section"
      >
        <div className="hero-overlay"></div>

        <div className="hero-content">
          <h1>Trusted Construction & Infrastructure Company in India</h1>
          <p>
            Brick Vista delivers innovative civil engineering, commercial,
            residential, hospital, and infrastructure construction solutions.
          </p>

          <Link to="/contact" className="main-btn">
            Get a Quote
          </Link>
        </div>
      </section>
    </header>
  );
}