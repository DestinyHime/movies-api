// import "./searchBar.css";
// import { useState, useEffect } from "react";
// import { NavLink, Link } from "react-router-dom";

// export default function SelectGenre({ movies }) {
//   const [search, setSearch] = useState("");
//   const [searchResults, setSearchResults] = useState([]);

//   useEffect(() => {
//     const results = movies.filter((movie) =>
//       movie.toLowerCase().includes(search)
//     );
//     setSearchResults(results);
//   }, [search]);
//   const handleSearch = (e) => {
//     setSearch(e.target.value);
//   };

//   const genreList = genres.map((item, index) => {
//     return (
//       <li className="list-inline-item" key={index}>
//         <button
//           type="button"
//           className="btn"
//           style={{ color: "tomato" }}
//           onClick={(e) => {
//             handleGenre(item.id);
//           }}
//         >
//           {item.name}
//         </button>
//       </li>
//     );
//   });
//   const movieList = movieByGenre.map((item, index) => {
//     return (
//       <div key={index}>
//         <div>
//           <Link to={`/movie/${item.id}`}>
//             <img src={item.poster} alt={item.title}></img>
//           </Link>
//           <div>
//             <h5> Rated: {item.rating} </h5>
//           </div>
//         </div>
//       </div>
//     );
//   });
// }
