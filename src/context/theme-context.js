import React from "react";
export const themes = {
  light: {
    foreground: "#00bfff",
    background: "#eeeeee",
  },
  dark: {
    foreground: "#ffffff",
    background: "#222222",
  },
};

export const ThemeContext = React.createContext(themes.light);
