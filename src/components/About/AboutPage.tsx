import AboutHero from "./AboutHero.tsx";
import "./AboutPage.css";
import AboutState from "./AboutState.tsx";
// import AboutHero from "./AboutHero";

const About = () => {
  return (
    <div className="about-page">
      <div className="about-page__info">
        {/* HERO */}
        <AboutHero />
        {/* STATE */}
        <AboutState />
      </div>

      <div className="about-us__card tech">
        <h3 className="about-us__small-heading">Tech Stack</h3>
        <div className="tech__list">
          <span className="tech__chip">React 19</span>
          <span className="tech__chip">TypeScript</span>
          <span className="tech__chip">Vite</span>
          <span className="tech__chip">React Router</span>
          <span className="tech__chip">React Hook Form</span>
          <span className="tech__chip">Zod</span>
        </div>
      </div>

      {/* FOOTER / CTA FINAL */}

      <p className="about-us__final">
        Contributions and feedback are welcome. Visit our GitHub repository to
        collaborate.
      </p>
    </div>
  );
};

export default About;
