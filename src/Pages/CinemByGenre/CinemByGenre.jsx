import { useState } from "react";
import CinemaGenreList from "../../Components/CinemaGenreList/CinemaGenreList";
import CinemaContainer from "../../Layouts/CinemaContainer/CinemaContainer";
import Navbar from "../../Layouts/Navbar/Navbar";
import CinemByGenreDecoration from "./CinemByGenreDecoration";
import CinemaDescription from "../../Shared_Components/CinemaDescription/CinemaDescription";
import { useParams } from "react-router-dom";
import useGenrCinema from "../../hooks/useGenrCinema";

const CinemByGenre = (props) => {
  const [genreListMenuState, setGenreListMenuState] = useState(false);
  const [cinemaDescription, setCinemaDescription] = useState(false);
  const cinemaNumberToList = 20;
  let cinemaGenre = "movie";
  let { cinemaGenreId } = useParams();
  cinemaGenreId = parseInt(cinemaGenreId);
  const serieIdAvailable = [
    10759, 16, 35, 80, 99, 18, 10751, 10762, 10763, 10764, 10765, 10766, 10767,
    10768, 37, 9648,
  ];
  const loaderCardsArray = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
  ];

  const isSerieCinemaGenre = serieIdAvailable.findIndex((number) => {
    return number === cinemaGenreId ? 1 : 0;
  });
  if (isSerieCinemaGenre > -1) {
    cinemaGenre = "tv";
    console.log("isSerieCinemaGenre existe", isSerieCinemaGenre);
  }

  const listOfGenre = useGenrCinema(cinemaGenre);

  const handleCinemaDescriptionState = () => {
    setCinemaDescription(!cinemaDescription);
    window.scrollTo(0, 0);
  };

  const handleGenreList = () => {
    return setGenreListMenuState(!genreListMenuState);
  };

 


  return (
    <CinemByGenreDecoration genreListMenuState={genreListMenuState}>
      <Navbar secondAppMode={true} />
      <main>
        <div className="cards-container-wrapper">
          {listOfGenre === undefined
            ? loaderCardsArray.map((card) => (
                <CinemaContainer
                  cinemaTitle="chargement"
                  seeMoreButton={false}
                  numberOfCards={cinemaNumberToList}
                  width="true"
                />
              ))
            : listOfGenre.map((card) => {
                return cinemaGenreId === card.id ? (
                  <CinemaContainer
                    cinemaTitle={card.name}
                    cinemaGenre={cinemaGenre}
                    idOfGenre={cinemaGenreId}
                    seeMoreButton={false}
                    numberOfCards={cinemaNumberToList}
                    tv
                    width="true"
                  >
                    {console.log(card.id)}
                  </CinemaContainer>
                ) : (
                  ""
                );
              })}
          <CinemaGenreList
            genreListMenuState={genreListMenuState}
            onClick={handleGenreList}
            listOfGenre = {listOfGenre}
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
