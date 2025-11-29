import FormPage from "../CustomForm/FormPage";
import Feature from "./Feature";
import Hero from "./Hero";
import "./HomePage.css";

const Home = () => {
  return (
    <div className="home__container">
      <div className="home__info">
        <Hero />
        <Feature />
      </div>
      <FormPage />
    </div>
  );
};

export default Home;
