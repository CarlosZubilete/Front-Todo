import { Link } from "react-router-dom";
import { FaChevronRight } from "react-icons/fa";
import "./Hero.css";

const Hero = () => {
  return (
    <section className="home__hero">
      <h1 className="home__title">¡Make your day more fun and organized!</h1>
      <p className="home__subtitle">
        Create your task or challenge list, save it in your database, and let
        the roulette decide for you.
      </p>
      <Link to={"/task"} className="home__cta-link">
        <button className="home__cta">
          <FaChevronRight className="home__cta-icon" />
          Try demo now
        </button>
      </Link>
    </section>
  );
};

export default Hero;
