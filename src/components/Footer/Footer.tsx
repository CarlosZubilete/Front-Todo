import "./Footer.css";
import { FaGithub, FaInstagram, FaLinkedin, FaDocker } from "react-icons/fa";
import { Link } from "react-router-dom";
import type { JSX } from "react";
import { links } from "../../data";
import { networks } from "../../data";
import type { LinkType, NetworkType } from "../../types";

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
          <p className="footer__location">📍 Tigre - Buenos Aires, Argentina</p>
          <p className="footer__email">
            <a
              href="mailto:carloszubiletesanchez@gmail.com"
              className="footer__link"
            >
              📩 carloszubiletesanchez@gmail.com
            </a>
          </p>
          <p className="footer__message">
            Thank you for visiting our application.
            <br /> <br />
            From your dreams to the digital world,
            <strong> only one click separates us. </strong>
          </p>
        </div>

        <div className="footer__section footer__links">
          <h2 className="footer__title">Quick Links</h2>
          <div className="footer__list">
            {links.map((link: LinkType) => {
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
              return networks.map((network: NetworkType) => (
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
