import useScroll from "../../hooks/useScroll";
import HomeHeroSection from "../../Layouts/HomeHeroSection/HomeHeroSection";
import SerieDecoration from "./SerieDecoration";
import CinemaContainer from "../../Layouts/CinemaContainer/CinemaContainer";
import banner from "../../assets/backgrounds/hero 2.jpg";
const Serie = () => {
  const [navBarYPosition, getNavBarPosition] = useScroll(false);
  const CinemaNumberToList = 4;
  return (
    <SerieDecoration>
      {window.addEventListener("scroll", getNavBarPosition)}
      <HomeHeroSection
        navBarYPosition={navBarYPosition}
        banner={banner}
        pageTitle="Tout sur tes séries préférées dans ton "
      />
      <CinemaContainer
        cinemaGenre="A la une"
        numberOfCards={CinemaNumberToList}
      />
      <CinemaContainer
        cinemaGenre="A venir"
        numberOfCards={CinemaNumberToList}
      />
    </SerieDecoration>
  );
};

export default Serie;
