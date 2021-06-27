import { useState } from "react";
import CinemaGenreList from "../../Components/CinemaGenreList/CinemaGenreList";
import CinemaContainer from "../../Layouts/CinemaContainer/CinemaContainer";
import Navbar from "../../Layouts/Navbar/Navbar";
import CinemByGenreDecoration from "./CinemByGenreDecoration";
import CinemaDescription from "../../Shared_Components/CinemaDescription/CinemaDescription";
import { useParams } from "react-router-dom";

const CinemByGenre = (props) => {
  const [genreListMenuState, setGenreListMenuState] = useState(false);
  const [cinemaDescription, setCinemaDescription] = useState(false);
  const cinemaNumberToList = 20;
  let id = useParams();

  const handleCinemaDescriptionState = () => {
    setCinemaDescription(!cinemaDescription);
    window.scrollTo(0, 0);
  };

  const handleGenreList = () => {
    return setGenreListMenuState(!genreListMenuState);
  };

  return (
    <CinemByGenreDecoration genreListMenuState={genreListMenuState}>
      {console.dir("praaaaaams", id.cinemaGenreId)}
      <Navbar secondAppMode={true} />
      <main>
        <div className="cards-container-wrapper">
          <CinemaContainer
            frenchNameOfGenre="Mieux notés"
            cinemaGenre="movie"
            nameOfGenre={id.cinemaGenreId}
            width="true"
            seeMoreButton={false}
            numberOfCards={cinemaNumberToList}
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

      <CinemaDescription
        cinemaDescription={cinemaDescription}
        onClick={handleCinemaDescriptionState}
      />
    </CinemByGenreDecoration>
  );
};

export default CinemByGenre;
