// src/components/Navbar.jsx
import "./Navbar.css";
import { Link } from "react-router-dom";

import { gsap } from "gsap";
import { ScrollToPlugin } from "gsap/all";

gsap.registerPlugin(ScrollToPlugin);

export default function Navbar() {

  const handleScrollTo = (targetId) => {
    gsap.to(window, {
      duration: 0.3,
      scrollTo: {
        y: targetId,
        offsetY: 70,
        autoKill: false,
      },
      ease: "power4.out",
    });
  };

  return (
    <nav className="navbar">
      <Link
        to="/"
        className="navbar-name"
        onClick={() => handleScrollTo("#home")}
      >
        Brice Minis
      </Link>
      <ul className="navbar-lead">
        <li>
          <button
            className="navbar-name"
            onClick={() => handleScrollTo("#home")}
          >
            Home
          </button>
        </li>
        <li>
          <button
            onClick={() => handleScrollTo("#about")}
            className="navbar-name"
          >
            About Me
          </button>
        </li>
        <li>
          <button
            onClick={() => handleScrollTo("#projects")}
            className="navbar-name"
          >
            Projects
          </button>
        </li>
        <Link to="/gallery" className="navbar-name">
          Gallery
        </Link>
        <li>
          <button
            onClick={() => handleScrollTo("#contact")}
            className="navbar-name"
          >
            Contact Me
          </button>
        </li>
      </ul>
    </nav>
  );
}
