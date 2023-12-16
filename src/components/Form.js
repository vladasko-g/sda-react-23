import React, { useState } from "react";

import { Input } from "./Input";

export const Form = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const login = () => {
    console.log({ username, password });
  };

  return (
    <div>
      <Input
        label="Username"
        handleChange={event => setUsername(event.target.value)}
      />

      <Input
        label="Password"
        handleChange={event => setPassword(event.target.value)}
      />

      <button onClick={login}>Login</button>
    </div>
  );
};
