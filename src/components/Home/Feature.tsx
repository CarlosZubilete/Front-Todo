import { FaPlus, FaTrash, FaSpinner } from "react-icons/fa";
import "./Feature.css";

const Feature = () => {
  return (
    <section id="features" className="home__features">
      <div className="home__feature">
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
      </div>
    </section>
  );
};

export default Feature;
