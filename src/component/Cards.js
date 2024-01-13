import React, { memo } from "react";

import { Card } from "./Card";

export const Cards = memo(({ data }) => {
  return data.map(item => {
    return <Card key={item.id} title={item.title} />;
  });
});
