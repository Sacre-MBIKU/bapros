import { Link } from "react-router-dom";
import CinemaGenreListDecoration from "./CinemaGenreListDecoration";
import CrossIcon from "../../Shared_Components/CrossIcon/CrossIcon";

const CinemaGenreList = ({ genreListMenuState, onClick }) => {
  return (
    <CinemaGenreListDecoration genreListMenuState={genreListMenuState}>
      <h3>Choisr le genre</h3>
      <ul className="genre-list">
        <CrossIcon genreListMenuState={genreListMenuState} onClick={onClick} />
        <li>
          <Link to="">1. A la une</Link>
        </li>

        <li>
          <Link to="">2. Populaire</Link>
        </li>

        <li>
          <Link to="">2. Populaire</Link>
        </li>

        <li>
          <Link to="">2. Populaire</Link>
        </li>

        <li>
          <Link to="">2. Populaire</Link>
        </li>
      </ul>
    </CinemaGenreListDecoration>
  );
};
export default CinemaGenreList;
