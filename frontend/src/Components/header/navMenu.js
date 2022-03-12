import "./navMenu.css";
import { NavLink } from "react-router-dom";

export default function NavMenu() {
  return (
    <div className="nav-container">
      <ul className="nav">
        <li>
          <NavLink className="nav-link" to="/">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink className="nav-link" to="/favourites">
            Favourite
          </NavLink>
        </li>
        <li>
          <NavLink className="nav-link" to="/login">
            Login
          </NavLink>
        </li>
      </ul>
    </div>
  );
}
