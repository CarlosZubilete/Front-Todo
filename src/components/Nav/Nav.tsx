import { useRef } from "react";
import "./Nav.css";
import { FaBars, FaMoon, FaSun, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";
import { links } from "./links.json";

type LinkProps = {
  id: number;
  label: string;
  href: string;
};

interface DarkModeProps {
  toggleTheme: () => void;
  isDarkMode: boolean;
}

const Nav = ({ toggleTheme, isDarkMode }: DarkModeProps) => {
  // reference to the navbar container
  const navRef = useRef<HTMLDivElement | null>(null);

  const toggleNavbar = () => {
    if (!navRef.current) return;
    navRef.current.classList.toggle("navbar__nav--responsive");
  };

  return (
    <nav className="navbar">
      {/* LOGO */}
      <h3 className="navbar__logo">LOGO TASK</h3>
      {/* BUTTON */}
      <button
        className="navbar__btn"
        onClick={toggleTheme}
        aria-label="Toggle Theme"
      >
        {isDarkMode ? <FaSun /> : <FaMoon />}
      </button>
      {/* NAVBAR */}
      <div className="navbar__nav" ref={navRef}>
        {/* NAVBAR BUTTON - RESPONSIVE */}
        {links.map((link: LinkProps) => {
          return (
            <Link
              key={link.id}
              to={link.href}
              className="navbar__link"
              onClick={toggleNavbar}
            >
              {link.label}
            </Link>
          );
        })}
        <button
          className="navbar__btn navbar__btn--close"
          onClick={toggleNavbar}
        >
          <FaTimes />
        </button>
      </div>
      {/* NAVBAR BUTTON - RESPONSIVE */}
      <button className="navbar__btn navbar__btn--menu" onClick={toggleNavbar}>
        <FaBars />
      </button>
    </nav>
  );
};

export default Nav;

/*  
*THIS CODE SHOWS ME A WARMING...
{links.map((link: LinkProps) => {
          return (
            <Link
              key={link.id}
              to={link.href}
              className="navbar__link"
              onClick={toggleNavbar}
            >
              {link.label}
            </Link>
          );
        })}
*/

/* 
      <Link to="/home" className="navbar__link">
          Home
        </Link>
        <Link to="/home" className="navbar__link">
          Contact
        </Link>
        <Link to="/home" className="navbar__link">
          Context
        </Link>
*/
