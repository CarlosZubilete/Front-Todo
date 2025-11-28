import "./Nav.css";
import { links } from "./links.json";
import { FaMoon, FaSun } from "react-icons/fa";

type Link = {
  id: number;
  label: string;
  href: string;
};

interface DarkModeProps {
  toggleTheme: () => void;
  isDarkMode: boolean;
}

const Nav = ({ toggleTheme, isDarkMode }: DarkModeProps) => {
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
      <div className="navbar__nav">
        {links.map((link: Link) => {
          return (
            <div key={link.id} className="navbar__link">
              <a href={link.href}> {link.label} </a>
            </div>
          );
        })}
      </div>
    </nav>
  );
};

export default Nav;
