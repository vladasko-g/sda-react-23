import React from "react";

import { useTheme } from "../hooks/useTheme";
import { Button } from "./Button";

export const ThemeToggle = () => {
  const theme = useTheme();

  return <Button onClick={theme.toggleTheme}>toggle them</Button>;
};
