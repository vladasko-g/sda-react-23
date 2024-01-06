import { createContext } from "react";

export const darkTheme = {
  colors: {
    text: "#fff",
    bg: "#333",
    accent: "darkgreen",
  },
  borders: {
    radius: 6,
  },
};

export const lightTheme = {
  colors: {
    text: "#333",
    bg: "#fff",
    accent: "lightblue",
  },
  borders: {
    radius: 6,
  },
};

export const ThemeContext = createContext(null);
