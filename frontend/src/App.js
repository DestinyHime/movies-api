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

import AuthenticationProvider from "./authenticationProvider";

//import nav-pages
import About from "./pages/About";
import Home from "./pages/Home";
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
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            {/* <Route path="/favourites" element={<Fav />} />
            
            <Route path="*" element={<NotFound />} />*/}
          </Routes>
        </Router>
      </AuthenticationProvider>
    </div>
  );
}

export default App;
