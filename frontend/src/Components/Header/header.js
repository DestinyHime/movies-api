import "./header.css";
import Logo from "./logo.js";
import NavMenu from "./navMenu.js";
import SearchBar from "./searchBar.js";
// import SelectGenre from "./selectGenre";

export default function Header() {
  return (
    <div className="header">
      <Logo></Logo>
      <SearchBar></SearchBar>
      <NavMenu></NavMenu>
    </div>
  );
}
