import "./App.css";
import Nav from "./components/Nav/Nav";
import Footer from "./components/Footer/Footer";
import { Outlet } from "react-router";
import useDarkMode from "./hooks/useDarkMode";
function App() {
  const { isDarkMode, toggleTheme } = useDarkMode();

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
