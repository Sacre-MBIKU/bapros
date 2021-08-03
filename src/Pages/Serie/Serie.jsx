import { useState } from "react";
import useScroll from "../../hooks/useScroll";
import HomeHeroSection from "../../Layouts/HomeHeroSection/HomeHeroSection";
import SerieDecoration from "./SerieDecoration";
import CinemaContainer from "../../Layouts/CinemaContainer/CinemaContainer";
import banner from "../../assets/backgrounds/hero 2.jpg";
import useGenrCinema from "../../hooks/useGenrCinema";
import CinemaDescription from "../../Shared_Components/CinemaDescription/CinemaDescription";
const Serie = () => {
  const [navBarYPosition, getNavBarPosition] = useScroll(false);
  const [cinemaDescription, setCinemaDescription] = useState(false);
  const [currentMovieId, setCurrentMovieId] = useState(-1);
  const handleCinemaDescriptionState = (event) => {
    setCurrentMovieId(event.currentTarget.dataset.id);
    console.dir("current id" + event.currentTarget.dataset.id);
    setCinemaDescription(!cinemaDescription);
    window.scrollTo(0, 0);
  };

  const CinemaNumberToList = 5;
  const loaderCardsArray = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
  ];
  const listOfGenre = useGenrCinema("tv");
  return (
    <SerieDecoration>
      {window.addEventListener("scroll", getNavBarPosition)}
      <HomeHeroSection
        navBarYPosition={navBarYPosition}
        banner={banner}
        pageTitle='Tout sur tes séries préférées dans ton '
      />
      {listOfGenre === undefined
        ? loaderCardsArray.map((card) => (
            <CinemaContainer
              cinemaTitle='chargement'
              numberOfCards={CinemaNumberToList}
            />
          ))
        : listOfGenre.map((card) => (
            <CinemaContainer
              cinemaTitle={card.name}
              cinemaGenre='tv'
              idOfGenre={card.id}
              numberOfCards={CinemaNumberToList}
              onClick={handleCinemaDescriptionState}
              tv
            />
          ))}

      {currentMovieId !== -1 ? (
        <CinemaDescription
          cinemaDescription={cinemaDescription}
          currentMovieId={currentMovieId}
          onClick={handleCinemaDescriptionState}
          genreCinema = "tv"
        />
      ) : (
        ""
      )}
    </SerieDecoration>
  );
};

export default Serie;
