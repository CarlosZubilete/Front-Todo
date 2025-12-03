import "./AboutState.css";
import { states } from "../../data";

type StateProps = {
  id: number;
  heading: string;
  text: string;
};

const AboutState = () => {
  return (
    <div className="about-state">
      {states.map((state: StateProps) => {
        return (
          <div key={state.id} className="about-state__card card-about">
            <h3 className="about-state__heading">{state.heading}</h3>
            <p className="about-state__text">{state.text}</p>
          </div>
        );
      })}
    </div>
  );
};

export default AboutState;
