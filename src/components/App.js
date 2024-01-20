import React, { useReducer } from "react";

const countReducer = (state, action) => {
  switch (action.type) {
    case "inc":
      return state + 1;
    case "dec":
      return state - 1;
    default:
      return state;
  }
};

export const App = () => {
  const [count, dispatchCount] = useReducer(countReducer, 0);

  return (
    <div>
      <button onClick={() => dispatchCount({ type: "inc" })}>inc</button>
      <button onClick={() => dispatchCount({ type: "dec" })}>dec</button>
      <div>{count}</div>
    </div>
  );
};
