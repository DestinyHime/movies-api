import "./poster.css";
import PosterCard from "./posters";
import { useLocation } from "react-router-dom";
export default function PostersGrid({ movies }) {
  const location = useLocation();

  return (
    <div className="grid">
      <ul className="movies-grid">
        <PosterCard></PosterCard>
      </ul>
    </div>
  );
}
