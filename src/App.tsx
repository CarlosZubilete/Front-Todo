import { useEffect, useState } from "react";
import "./App.css";
import Nav from "./components/Nav/Nav";

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
    </div>
  );
}

export default App;
