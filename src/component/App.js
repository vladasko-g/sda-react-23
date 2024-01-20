import React, { lazy } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { ThemeProvider } from "../theme";

import { PageRoot } from "./PageRoot";

const router = createBrowserRouter([
  {
    path: "/",
    element: <PageRoot />,
    children: [
      {
        path: "/",
        async lazy() {
          const { ContentMain } = await import("./ContentMain");

          return { Component: ContentMain };
        },
      },
      {
        path: "/about",
        async lazy() {
          const { ContentAbout } = await import("./ContentAbout");

          return { Component: ContentAbout };
        },
      },
      {
        path: "/contact/:type",
        async lazy() {
          const { ContentContacts } = await import("./ContentContacts");

          return { Component: ContentContacts };
        },
      },
    ],
  },
]);

export const App = () => {
  return (
    <ThemeProvider>
      <RouterProvider router={router} />
    </ThemeProvider>
  );
};
