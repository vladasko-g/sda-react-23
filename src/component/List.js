import React from "react";

export const List = ({ children }) => {
  return (
    <ul
      style={{
        display: "flex",
        listStyle: "none",
        padding: 0,
        margin: 0,
      }}
    >
      {children}
    </ul>
  );
};
