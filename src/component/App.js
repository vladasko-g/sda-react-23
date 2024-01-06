import React, { useState } from "react";

import { Page } from "./Page";
import { Header } from "./Header";
import { MainContent } from "./MainContent";

import { ThemeContext, darkTheme, lightTheme } from "../theme";

export const App = () => {
  const [theme, setTheme] = useState(lightTheme);

  const themeContext = {
    values: theme,
    toggleTheme: () => {
      setTheme(theme => {
        if (theme === lightTheme) return darkTheme;

        return lightTheme;
      });
    },
  };

  return (
    <ThemeContext.Provider value={themeContext}>
      <Page>
        <Header />
        <MainContent />
      </Page>
    </ThemeContext.Provider>
  );
};
