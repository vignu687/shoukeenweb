import { createContext, useContext, useEffect, useState } from "react";

const ThemeContext = createContext();

const THEMES = {
  day: "from-gray-100 via-white to-gray-100 text-black",
  lounge: "from-black via-gray-900 to-black text-white",
  night: "from-black via-purple-950 to-black text-white",
};

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState("lounge");

  useEffect(() => {
    const hour = new Date().getHours();
    if (hour >= 7 && hour < 18) setTheme("day");
    else if (hour >= 18 && hour < 22) setTheme("lounge");
    else setTheme("night");
  }, []);

  return (
    <ThemeContext.Provider value={{ theme, THEMES }}>
      {children}
    </ThemeContext.Provider>
  );
}

export const useTheme = () => useContext(ThemeContext);
