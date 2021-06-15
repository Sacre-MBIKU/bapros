import useScroll from "../../hooks/useScroll";
import HomeHeroSection from "../../Layouts/HomeHeroSection/HomeHeroSection";
import MovieDecoration from "./MovieDecoration";
import CinemaContainer from "../../Layouts/CinemaContainer/CinemaContainer";
import banner from "../../assets/backgrounds/hero1.png";
const Movie = () => {
  const [navBarYPosition, getNavBarPosition] = useScroll(false);
  const CinemaNumberToList = 4;
  return (
    <MovieDecoration>
      {window.addEventListener("scroll", getNavBarPosition)}
      <HomeHeroSection
        navBarYPosition={navBarYPosition}
        banner={banner}
        pageTitle="Tout sur tes films préférés dans ton "
      />
      <CinemaContainer
        cinemaGenre="A la une"
        numberOfCards={CinemaNumberToList}
      />
      <CinemaContainer
        cinemaGenre="A venir"
        numberOfCards={CinemaNumberToList}
      />
    </MovieDecoration>
  );
};

export default Movie;
