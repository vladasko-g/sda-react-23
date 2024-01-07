import React from "react";

import { Content } from "./Content";
import { PaginationButtons } from "./PaginationButtons";
import { Cards } from "./Cards";
import { useTodos } from "../hooks/useTodos";

export const MainContent = () => {
  const { setPage, finalPage, page, todos } = useTodos();

  return (
    <Content>
      <Cards data={todos} />
      <PaginationButtons setPage={setPage} finalPag={finalPage} page={page} />
    </Content>
  );
};
