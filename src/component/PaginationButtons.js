import React, { useRef } from "react";

import { Button } from "./Button";

// Ref examples
export const PaginationButtons = ({ setPage, page, finalPage = 20 }) => {
  const someButton = useRef(null);

  console.log(someButton);

  return (
    <div
      style={{
        padding: 12,
        display: "flex",
        gap: 12,
      }}
    >
      {page > 1 && (
        <Button ref={someButton} onClick={() => setPage(page => page - 1)}>
          Prev
        </Button>
      )}
      {page < finalPage && (
        <Button onClick={() => setPage(page => page + 1)}>Next</Button>
      )}
    </div>
  );
};
