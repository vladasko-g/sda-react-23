import React from "react";

import { Title } from "./Title";

const Example1 = ({ shouldRender, children }) => {
  if (shouldRender) return children;

  return null;
};

const Example2 = ({ shouldRender, children }) => {
  return shouldRender ? children : null;
};

const Example3 = ({ shouldRender, value }) => {
  return <div>value - {shouldRender ? value : ""}</div>;
};

export const ConditionExamples = () => {
  return (
    <div>
      <Title>ConditionExamples</Title>
      <Example1 shouldRender={true}>
        <p>I am visible </p>
      </Example1>
      <Example1 shouldRender={false}>
        <p>I am not visible </p>
      </Example1>

      <Example2 shouldRender={true}>
        <p>I am visible </p>
      </Example2>
      <Example2 shouldRender={false}>
        <p>I am notvisible </p>
      </Example2>

      <Example3 shouldRender={true} value="Visible value" />
      <Example3 shouldRender={false} value="Not visible value" />
    </div>
  );
};
