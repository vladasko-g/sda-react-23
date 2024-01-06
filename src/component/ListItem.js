import React from "react";

export const ListItem = ({ children }) => {
  return (
    <li
      style={{
        marginLeft: 10,
        marginPadding: 10,
      }}
    >
      {children}
    </li>
  );
};
