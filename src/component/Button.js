import React, { forwardRef } from "react";

import { useTheme } from "../hooks/useTheme";

// Ref examples
export const Button = forwardRef(({ children, onClick, ...rest }, ref) => {
  const theme = useTheme();

  return (
    <button
      ref={ref}
      style={{
        padding: "8px 16px",
        border: "none",
        borderRadius: theme.values.borders.radius,
        background: theme.values.colors.accent,
        color: theme.values.colors.text,
      }}
      onClick={onClick}
      {...rest}
    >
      {children}
    </button>
  );
});
