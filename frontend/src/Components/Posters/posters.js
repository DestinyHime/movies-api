import "./poster.css";
import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";

export default function PosterCard() {
  const location = useLocation();

  const [movies, setMovies] = useState([]);
  useEffect(() => {
    fetch("/api/movies")
      .then((response) => response.json())
      .then((data) => setMovies(data.movies));
  }, []);

  return movies.map(function (movie) {
    return (
      <li className="posters" key={movie._id}>
        <img src={movie.poster} className="poster-img" />
        <span className="movie-title">{movie.title}</span>
        {/* <span>{movie.plot}</span> */}
        <span>{movie.year}</span>
        <span>{movie.rating}</span>
        {/* <span>{movie.duration}</span> */}
      </li>
    );
  });
}
