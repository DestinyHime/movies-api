import React, { useState } from "react";
import { useNavigate, Link, useLocation } from "react-router-dom";

import { useAuth } from "../authenticationProvider";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const handleUsernameChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleLoginClick = async () => {
    if (email && password) {
      const data = {
        email: email,
        password: password,
      };
      const response = await fetch(`/api/auth/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      console.log(response.status);
      if (response.status === 200) {
        const data = await response.json();
        login(data);
        navigate("/", { replace: true });
      }
    }
  };

  return (
    <div>
      <h1>Login</h1>
      <div>
        <label for="username">Username</label>
        <input
          className="login-form"
          type="text"
          onChange={handleUsernameChange}
          value={email}
        />
      </div>
      <div>
        <label for="password">Password </label>
        <input
          type="password"
          onChange={handlePasswordChange}
          value={password}
          className="login-form"
        />
      </div>
      <div>
        <button onClick={handleLoginClick} className="login-button">
          Log in
        </button>
        <p>
          <Link to="/register" className="register-link">
            {" "}
            Not a member yet?
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
