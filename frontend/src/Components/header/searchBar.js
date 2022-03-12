import "./searchBar.css";

export default function SearchBar({ movies }) {
  return (
    <div className="testing">
      <input
        type="text"
        //onChange={handleInputChange}
        //onKeyUp={handleSubmitSearch}
        className="search-bar"
        name="searchInput"
        placeholder="Search"
      ></input>
      <button className="search-button">
        <img src="../search.png" className="search-img" />
      </button>
    </div>
  );
}
