import { useEffect, useState } from "react";
import "./App.css";
import Nav from "./components/Nav/Nav";
import Footer from "./components/Footer/Footer";
import { Outlet } from "react-router";

function App() {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false);

  const toggleTheme = () => setIsDarkMode(!isDarkMode);

  useEffect(() => {
    const body = document.body;
    if (isDarkMode) {
      body.classList.add("dark-mode");
    } else {
      body.classList.remove("dark-mode");
    }
  }, [isDarkMode]);

  return (
    <div className="App">
      <Nav toggleTheme={toggleTheme} isDarkMode={isDarkMode} />
      {/* Other components will be rendered here via routing */}
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default App;
