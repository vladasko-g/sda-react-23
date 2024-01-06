import React from "react";

import { Content } from "./Content";
import { Card } from "./Card";

export const MainContent = () => {
  return (
    <Content>
      <Card
        title="Some title 1"
        description="Some description some desc some desc some desc some desc"
      />
      <Card title="Some title 2" description="Some description some desc" />
      <Card
        title="Some title 3"
        description="Some description some desc some desc some desc some desc some desc some desc"
      />
    </Content>
  );
};
