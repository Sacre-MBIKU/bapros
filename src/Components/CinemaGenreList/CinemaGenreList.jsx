import { Link, useHistory } from "react-router-dom";
import CinemaGenreListDecoration from "./CinemaGenreListDecoration";
import CrossIcon from "../../Shared_Components/CrossIcon/CrossIcon";

const CinemaGenreList = ({ genreListMenuState, onClick, listOfGenre }) => {
  const history = useHistory();

  return (
    <CinemaGenreListDecoration genreListMenuState={genreListMenuState}>
      <h3>Choisr le genre</h3>
      <ul className="genre-list">
        <CrossIcon genreListMenuState={genreListMenuState} onClick={onClick} />
        {listOfGenre === undefined
          ? "loading"
          : listOfGenre.map((list, key) => (
              <li>
                <Link
                  key={key}
                  to={""}
                  onClick={(event) => {
                    event.preventDefault();
                    history.push(`/cinemabygenre/${list.id}`);
                  }}
                >
                  {" "}
                  {list.name}{" "}
                </Link>
              </li>
            ))}
      </ul>
    </CinemaGenreListDecoration>
  );
};
export default CinemaGenreList;
