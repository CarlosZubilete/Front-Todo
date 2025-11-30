import { useState, useEffect } from "react";

type UseDarkModeReturn = {
  isDarkMode: boolean;
  toggleTheme: () => void;
};

const getInitialTheme = (): boolean => {
  if (typeof window === "undefined") return false;
  try {
    const savedTheme = localStorage.getItem("theme");
    return savedTheme === "dark";
  } catch {
    return false;
  }
};

const useDarkMode = (): UseDarkModeReturn => {
  const [isDarkMode, setIsDarkMode] = useState(getInitialTheme);

  useEffect(() => {
    const body = document.body;

    if (isDarkMode) {
      body.classList.add("dark-mode");
      localStorage.setItem("theme", "dark");
    } else {
      body.classList.remove("dark-mode");
      localStorage.setItem("theme", "light");
    }
  }, [isDarkMode]);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  return { isDarkMode, toggleTheme };
};

export default useDarkMode;
