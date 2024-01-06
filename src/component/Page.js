import React from "react";

import { useTheme } from "../hooks/useTheme";

export const Page = ({ children }) => {
  const theme = useTheme();

  return (
    <div
      style={{
        minHeight: "100vh",
        overflow: "hidden",
        background: theme.values.colors.bg,
        color: theme.values.colors.text,
      }}
    >
      {children}
    </div>
  );
};
