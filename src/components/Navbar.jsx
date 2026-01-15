// src/components/Navbar.jsx
import "./Navbar.css";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollToPlugin } from "gsap/all";

gsap.registerPlugin(ScrollToPlugin);

export default function Navbar() {
  const container = useRef();
  const navigate = useNavigate();
  const location = useLocation();


  useGSAP(
    () => {
      if (location.pathname === "/" && location.hash) {
        gsap.to(window, {
          duration: 0.2,
          scrollTo: {
            y: location.hash,
            autoKill: false,
          },
          ease: "power2.out",
        });
      }
    },
    { scope: container, dependencies: [location] }
  );

  const handleScrollTo = (targetId) => {
    if (location.pathname !== "/") {
      navigate(`/${targetId}`);
    } else {
      gsap.to(window, {
        duration: 0.3,
        scrollTo: {
          y: targetId,
          autoKill: false,
        },
        ease: "power4.out",
      });
    }
  };

  return (
    <nav className="navbar" ref={container}>
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
