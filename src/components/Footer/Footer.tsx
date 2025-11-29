import "./Footer.css";
import { FaGithub, FaInstagram, FaLinkedin, FaDocker } from "react-icons/fa";
import { Link } from "react-router-dom";
// import type { ReactNode } from "react";
import { links } from "../Nav/links.json";
import { networks } from "./networks.json";
import type { JSX } from "react";

type LinkProps = {
  id: number;
  label: string;
  href: string;
};

const Footer = () => {
  // Map social media labels to their corresponding icons
  const iconMap: Record<string, JSX.Element> = {
    GitHub: <FaGithub className="footer__icon" />,
    LinkedIn: <FaLinkedin className="footer__icon" />,
    DockerHub: <FaDocker className="footer__icon" />,
    Instagram: <FaInstagram className="footer__icon" />,
  };

  return (
    <footer className="footer">
      <div className="footer__content">
        <div className="footer__section footer__about">
          <h2 className="footer__title">Contact Us</h2>
          <p className="footer__location">Argentina - Bs.As. - Tigre</p>
          <p className="footer__email">
            <a
              href="mailto:carloszubiletesanchez@gmail.com"
              className="footer__link"
            >
              carloszubiletesanchez@gmail.com
            </a>
          </p>
          <p className="footer__message">
            Thank you for trusting in our work.
            <br />
            If you're looking to boost your project, let's connect!
          </p>
        </div>

        <div className="footer__section footer__links">
          <h2 className="footer__title">Quick Links</h2>
          <div className="footer__list">
            {links.map((link: LinkProps) => {
              return (
                <Link key={link.id} to={link.href} className="footer__link">
                  {link.label}
                </Link>
              );
            })}
          </div>
        </div>

        <div className="footer__section footer__social">
          <h2 className="footer__title">Follow Us</h2>
          <ul className="footer__social-list">
            {(() => {
              return networks.map((network: LinkProps) => (
                <li key={network.id}>
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href={network.href}
                    className="footer__social-link"
                  >
                    {iconMap[network.label] ?? (
                      <FaGithub className="footer__icon" />
                    )}
                    <span className="footer__social-text">{network.label}</span>
                  </a>
                </li>
              ));
            })()}
          </ul>
        </div>
      </div>
      {/* ANOTHER COLUMN */}
      <div className="footer__bottom">
        <p className="footer__copyright">
          © 2025 All rights reserved — Carlos Zubilete
        </p>
      </div>
    </footer>
  );
};

export default Footer;
