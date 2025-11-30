import "./AboutHero.css";

const AboutHero = () => {
  return (
    <div className="about-hero">
      <h1 className="about-hero__title">TUDU</h1>
      <p className="about-hero__lead">
        Your perfect companion for organizing tasks, setting priorities, and
        achieving your goals. Simple, fast, and distraction-free.
      </p>

      <div className="about-hero__ctas">
        <a
          href="https://github.com/CarlosZubilete/Front-Todo"
          className="btn btn-ghost"
          target="_blank"
          rel="noreferrer"
        >
          View on GitHub
        </a>
      </div>
      <div className="about-hero__panel">
        <h2 className="about-hero__heading">Why TUDU ?</h2>
        <p className="about-hero__text">
          Born as a project to prove that effective tools don't need to be
          complicated. We believe in productivity without noise, focusing only
          on what matters: your task list.
        </p>
      </div>
    </div>
  );
};

export default AboutHero;
