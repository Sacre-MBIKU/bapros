import useScroll from "../../hooks/useScroll";
import HomeHeroSection from "../../Layouts/HomeHeroSection/HomeHeroSection";
import MovieDecoration from "./MovieDecoration";
import CinemaContainer from "../../Layouts/CinemaContainer/CinemaContainer";
import banner from "../../assets/backgrounds/hero1.png";
import useGenrCinema from "../../hooks/useGenrCinema";
const Movie = () => {
  const [navBarYPosition, getNavBarPosition] = useScroll(false);
  const CinemaNumberToList = 5;
  const loaderCardsArray = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
  ];
  const listOfGenre = useGenrCinema("movie");
  return (
    <MovieDecoration>
      {window.addEventListener("scroll", getNavBarPosition)}
      <HomeHeroSection
        navBarYPosition={navBarYPosition}
        banner={banner}
        pageTitle="Tout sur tes films préférés dans ton "
      />
      {
        listOfGenre === undefined ?
        loaderCardsArray.map((card) => (<CinemaContainer 
          cinemaTitle="chargement"
          numberOfCards={CinemaNumberToList} />)) :
          listOfGenre.map((card) => (<CinemaContainer 
            cinemaTitle={card.name}
            cinemaGenre="movie"
            idOfGenre = {card.id}
            numberOfCards={CinemaNumberToList} />))
      }
      
    </MovieDecoration>
  );
};

export default Movie;
