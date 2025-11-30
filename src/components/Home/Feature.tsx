import { FaPlus, FaTrash, FaSpinner } from "react-icons/fa";
import "./Feature.css";
import type { JSX } from "react";
import { features } from "./features.json";

type FeatureProps = {
  id: number;
  name: string;
  title: string;
  description: string;
  // icon: JSX.Element;
};

const Feature = () => {
  const iconMap: Record<string, JSX.Element> = {
    FaPlus: <FaPlus className="home__feature-icon" />,
    FaSpinner: <FaSpinner className="home__feature-icon" />,
    FaTrash: <FaTrash className="home__feature-icon" />,
  };

  return (
    <section id="features" className="home__features">
      {(() => {
        return features.map((feature: FeatureProps) => (
          <div key={feature.id} className="home__feature">
            {iconMap[feature.name] ?? <FaPlus className="home__feature-icon" />}
            <h3 className="home__feature-title">{feature.title}</h3>
            <p className="home__feature-desc">{feature.description}</p>
          </div>
        ));
      })()}
    </section>
  );
};

export default Feature;

/* <div className="home__feature">
  <FaPlus className="home__feature-icon" />
  <h3 className="home__feature-title">Add and Remove</h3>
  <p className="home__feature-desc">
    Up to 12 items. Add or remove whenever you want.
  </p>
</div>
<div className="home__feature">
  <FaSpinner className="home__feature-icon" />
  <h3 className="home__feature-title">Spin the wheel</h3>
  <p className="home__feature-desc">
    Get a random number and may the force be with you
  </p>
</div>
<div className="home__feature">
  <FaTrash className="home__feature-icon" />
  <h3 className="home__feature-title">Manage in your browser</h3>
  <p className="home__feature-desc">
    We save everything in DataBase. (*Do save sensitive data*)
  </p>
</div> */
