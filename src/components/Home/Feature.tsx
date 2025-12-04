import { FaPlus, FaTrash, FaSpinner } from "react-icons/fa";
import "./Feature.css";
import type { JSX } from "react";
import { features } from "../../data";
import type { FeatureType } from "../../types";

// type FeatureProps = FeatureType;

const Feature = () => {
  const iconMap: Record<string, JSX.Element> = {
    FaPlus: <FaPlus className="home__feature-icon" />,
    FaSpinner: <FaSpinner className="home__feature-icon" />,
    FaTrash: <FaTrash className="home__feature-icon" />,
  };

  return (
    <section id="features" className="home__features">
      {(() => {
        return features.map((feature: FeatureType) => (
          <div key={feature.id} className="home__feature home-card">
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
