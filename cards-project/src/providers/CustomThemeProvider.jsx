import { createContext, useCallback, useContext, useState } from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { grey, indigo } from "@mui/material/colors";

const ThemeContext = createContext();

export default function CustomThemeProvider({ children }) {
  const [isDark, setIsDark] = useState(false);

  const toggleDarkMode = useCallback(() => {
    setIsDark((prev) => !prev);
  }, []);

  const mytheme = createTheme({
    palette: {
      mode: isDark ? "dark" : "light",
      primary: {
        main: isDark ? "#26428c" : "#6381d4",
      },
      secondary: {
        main: isDark ? "#dedede" : "#000000"
      },
      text: isDark ? grey : indigo,      
    },
    typography:{
      fontFamily: "Akatab"      
    },
  });

  return (
    <ThemeProvider theme={mytheme}>
      <ThemeContext.Provider value={{ toggleDarkMode, isDark }}>
        {children}
      </ThemeContext.Provider>
    </ThemeProvider>
  );
}
export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) throw new Error("useTheme must be used within a Provider");
  return context;
};