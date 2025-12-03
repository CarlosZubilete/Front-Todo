import "./AboutTech.css";
import { technologies } from "../../data";

type TechProps = {
  id: number;
  name: string;
  url: string;
};

const AboutTech = () => {
  // Duplicate the tech stack 3 times for seamless infinite scroll

  const items: TechProps[] = [
    ...technologies,
    ...technologies,
    ...technologies,
  ];

  return (
    <div className="about-tech card-about">
      <h3 className="about-tech__heading">Tech Stack</h3>
      <div className="about-tech__carousel">
        <div className="about-tech__group">
          {items.map((tech: TechProps) => (
            <a
              key={tech.id}
              className="about-tech__chip"
              href={tech.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              {tech.name}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutTech;
