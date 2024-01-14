import React from "react";

import { ThemeProvider } from "../theme";

import { ContentMain } from "./ContentMain";
import { Page } from "./Page";
import { Header } from "./Header";

export const App = () => {
  return (
    <ThemeProvider>
      <Page>
        <Header />
        <ContentMain />,
      </Page>
    </ThemeProvider>
  );
};
