import React from "react";

import { useTheme } from "../hooks/useTheme";

export const Link = ({ href, children }) => {
  const theme = useTheme();

  return (
    <a
      style={{
        textDecoration: "none",
        color: theme.values.colors.text,
      }}
      href={href}
    >
      {children}
    </a>
  );
};
