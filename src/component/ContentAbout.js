import React, { useRef, useState, useEffect } from "react";

import { Content } from "./Content";

// Ref examples
export const ContentAbout = () => {
  const [_, setAnything] = useState(false);

  const inputRef = useRef(null);
  const timer = useRef(null);

  let count1 = 0;
  const count2 = useRef(0);

  console.log("render value count1", count1);
  console.log("render value count2", count2.current);

  console.log("inputRef", inputRef);

  useEffect(() => {
    timer.current = setInterval(() => {
      console.log("time to log");
    }, 3000);

    inputRef.current.focus();

    console.log(timer.current);
  }, []);

  return (
    <Content>
      <button onClick={() => setAnything(anything => !anything)}>
        force rerender
      </button>
      <button
        onClick={() => {
          count1 = count1 + 1;
          count2.current = count2.current + 1;

          console.log("updated count1", count1);
          console.log("updated count2", count2.current);
        }}
      >
        increment counts
      </button>
      <button
        onClick={() => {
          clearInterval(timer.current);
        }}
      >
        cancel timer
      </button>
      <div>
        <p>about</p>
        <div>
          <input ref={inputRef} type="text" />
        </div>
      </div>
    </Content>
  );
};
