import React from "react";

import { Title } from "./Title";
import { List } from "./List";
import { ConditionExamples } from "./ConditionExamples";

export const App = () => {
  return (
    <div>
      <Title>React List App</Title>
      <List />
      <ConditionExamples />
    </div>
  );
};
