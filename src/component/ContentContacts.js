import React from "react";
import { useParams, useSearchParams } from "react-router-dom";

import { Content } from "./Content";

export const ContentContacts = () => {
  const { type } = useParams();
  const [searchParams] = useSearchParams();

  // query params can be used
  console.log(searchParams);

  return (
    <Content>
      <div>contacts {type}</div>
    </Content>
  );
};
