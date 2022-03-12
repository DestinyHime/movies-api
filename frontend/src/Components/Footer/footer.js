import "./footer.css";
import { NavLink } from "react-router-dom";

export default function Footer() {
  const name = "Anna Lisbona";
  let today = new Date();
  let year = today.getFullYear();
  return (
    <div>
      <ul className="footer-container">
        <li className="footer-info">
          <NavLink className="footer-link" to="/">
            About
          </NavLink>
        </li>
        <li className="footer-info">|</li>
        <li className="footer-info">Created by {name}</li>
        <li className="footer-info">|</li>
        <li className="footer-info">Copyright {year}</li>
      </ul>
    </div>
  );
}
