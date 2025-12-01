import "./AboutPage.css";
import AboutHero from "./AboutHero.tsx";
import AboutState from "./AboutState.tsx";
import AboutTeach from "./AboutTech.tsx";

const About = () => {
  return (
    <div className="about-page">
      <div className="about-page__info">
        {/* HERO */}
        <AboutHero />
        {/* STATE */}
        <AboutState />
      </div>
      {/* TEACH */}
      <AboutTeach />
      <p className="about-us__final">
        Contributions and feedback are welcome. Visit our GitHub repository to
        collaborate.
      </p>
    </div>
  );
};

export default About;
