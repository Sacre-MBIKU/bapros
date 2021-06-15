import { useState } from "react";
import CinemaGenreList from "../../Components/CinemaGenreList/CinemaGenreList";
import CinemaContainer from "../../Layouts/CinemaContainer/CinemaContainer";
import Navbar from "../../Layouts/Navbar/Navbar";
import CinemByGenreDecoration from "./CinemByGenreDecoration";

const CinemByGenre = ({ genre }) => {
  const [genreListMenuState, setGenreListMenuState] = useState(false);

  const handleGenreList = () => {
    return setGenreListMenuState(!genreListMenuState);
  };
  return (
    <CinemByGenreDecoration genreListMenuState={genreListMenuState}>
      <Navbar secondAppMode={true} />
      <main>
        <div className="cards-container-wrapper">
          <CinemaContainer
            cinemaGenre="A la une"
            width="true"
            seeMoreButton={false}
          />
          <CinemaGenreList
            genreListMenuState={genreListMenuState}
            onClick={handleGenreList}
          />
          <div className="filter-hamburger">
            <button onClick={handleGenreList}>Choisir le genre </button>
          </div>
        </div>
      </main>
    </CinemByGenreDecoration>
  );
};

export default CinemByGenre;
