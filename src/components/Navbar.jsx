// src/components/Navbar.jsx
import "./Navbar.css";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar">
      <Link to="/" className="navbar-name">
        Brice Minis
      </Link>
      <ul className="navbar-lead">
        <li>
          <a className="navbar-name" href="#home">
            Home
          </a>
        </li>
        <li>
          <a className="navbar-name" href="#about-me">
            About Me
          </a>
        </li>
        <li>
          <a className="navbar-name" href="#projects">
            Projects
          </a>
        </li>
        <Link to="/gallery" className="navbar-name">
          Gallery
        </Link>
        <li>
          <a className="navbar-name" href="#contact-me">
            Contact Me
          </a>
        </li>
      </ul>
    </nav>
  );
}
