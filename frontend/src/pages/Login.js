import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import { useAuth } from "../authenticationProvider";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleLoginClick = () => {
    if (username && password) {
      login(username);
      navigate("/", { replace: true });
    }
  };

  return (
    <div>
      <h1>Login</h1>
      <div>
        <label for="username">Username</label>
        <input type="text" onChange={handleUsernameChange} value={username} />
      </div>
      <div>
        <label for="password">Password </label>
        <input
          type="password"
          onChange={handlePasswordChange}
          value={password}
        />
      </div>
      <div>
        <button onClick={handleLoginClick}>Log in</button>
      </div>
    </div>
  );
};

export default Login;
