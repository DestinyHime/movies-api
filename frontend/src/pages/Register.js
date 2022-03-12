import React, { useState } from "react";
import { useNavigate, Link, useLocation } from "react-router-dom";
import { useAuth } from "../authenticationProvider";

export default function Register() {
  const [inputEmail, setInputEmail] = useState("");
  const [inputPassword, setInputPassword] = useState("");
  const [inputPassword2, setInputPassword2] = useState("");
  const [inputName, setInputName] = useState("");
  const navigate = useNavigate();
  const { login } = useAuth();

  const handleInputChange = (e) => {
    if (e.target.name === "email__input") {
      setInputEmail(e.target.value);
    }

    if (e.target.name === "name__input") {
      setInputName(e.target.value);
    }
    if (e.target.name === "password__input") {
      setInputPassword(e.target.value);
    }
    if (e.target.name === "password__input2") {
      setInputPassword2(e.target.value);
    }
  };
  async function register() {
    const data = {
      name: inputName,
      email: inputEmail,
      password: inputPassword,
    };
    const response = await fetch(`/api/auth/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    if (response.status === 200) {
      login(data);
      navigate("/", { replace: true });
    }
  }

  return (
    <div>
      <div>
        <h1> Register</h1>
        <div>
          <div>
            <input
              name="name__input"
              type="text"
              placeholder="name"
              value={inputName}
              onChange={handleInputChange}
              className="register-inputs"
            />
          </div>
          <div>
            <input
              type="email"
              name="email__input"
              placeholder="email address"
              value={inputEmail}
              onChange={handleInputChange}
              className="register-inputs"
            />
          </div>
          <div>
            <input
              type="password"
              placeholder="password"
              name="password__input"
              value={inputPassword}
              onChange={handleInputChange}
              className="register-inputs"
            />
          </div>
          <div>
            <input
              type="password"
              placeholder="confirm password"
              name="password__input2"
              value={inputPassword2}
              onChange={handleInputChange}
              className="register-inputs"
            />
          </div>

          <button onClick={register} className="login-button">
            Create
          </button>
          <p>
            Already registered?{" "}
            <Link className="login-link" to="/login">
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
