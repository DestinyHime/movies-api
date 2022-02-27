//import general
import logo from "./logo.svg";
import "./App.css";
import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  NavLink,
} from "react-router-dom";

//import components
import Header from "./Components/Header/header.js";
import Poster from "./Components/Poster/poster.js";
import AuthenticationProvider from "./authenticationProvider";

//import nav-pages
import About from "./pages/About";
import Fav from "./pages/Fav";
import Login from "./pages/Login";
import Register from "./pages/Register";
import User from "./pages/User";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <div className="App">
      <AuthenticationProvider>
        <Router>
          <ul className="nav-bar">
            <li>
              <NavLink activeClassName="active" to="/">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink activeClassName="active" to="/favourite">
                Favourite
              </NavLink>
            </li>
            <li>
              <NavLink activeClassName="active" to="/login">
                Login
              </NavLink>
            </li>
          </ul>
          <Routes>
            <Route path="/" element={<App />} />
            <Route path="/favourite" element={<Fav />} />
            <Route path="/login" element={<Login />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Router>
      </AuthenticationProvider>
      <Header></Header>
      <Poster></Poster>
    </div>
  );
}

export default App;
