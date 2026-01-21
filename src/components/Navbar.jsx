// src/components/Navbar.jsx
import "./Navbar.css";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { useRef, useState, useEffect } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollToPlugin } from "gsap/all";

gsap.registerPlugin(ScrollToPlugin);

export default function Navbar() {
  const container = useRef();
  const navigate = useNavigate();
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (isOpen) setIsOpen(false);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isOpen]);

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
    { scope: container, dependencies: [location] },
  );

  const handleScrollTo = (targetId) => {
    if (location.pathname !== "/") {
      navigate(`/${targetId}`);
      setIsOpen(false);
    } else {
      gsap.to(window, {
        duration: 0.3,
        scrollTo: {
          y: targetId,
          autoKill: false,
        },
        ease: "power4.out",
      });
      setIsOpen(false);
    }
  };

  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
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

      <ul className={`navbar-lead ${isOpen ? "active" : ""}`}>
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
        <Link
          to="/gallery"
          className="navbar-name"
          onClick={() => setIsOpen(false)}
        >
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
      <span className={` ${isOpen ? "whitespace" : ""}`}></span>
      <button
        className={`burger-icon ${isOpen ? "open" : ""}`}
        onClick={toggleMenu}
        aria-label="Toggle navigation"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="size-6"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
          />
        </svg>
      </button>
    </nav>
  );
}
