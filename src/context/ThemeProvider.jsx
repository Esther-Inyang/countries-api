import { useState } from "react";
import { ThemeContext } from "./themeContext";

const ThemeProvider = ({ children }) => {
  const [mode, setMode] = useState(true);

  const switchMode = () => {
    setMode((prev) => !prev);
  };

  return (
    <ThemeContext.Provider value={{ mode, switchMode }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
