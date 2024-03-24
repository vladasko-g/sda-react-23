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
        value={username}
        label="Username"
        handleChange={event => setUsername(event.target.value)}
      />

      <Input
        value={password}
        label="Password"
        handleChange={event => setPassword(event.target.value)}
      />

      <button onClick={login}>Login</button>
    </div>
  );
};
