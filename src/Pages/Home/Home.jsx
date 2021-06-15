import useScroll from "../../hooks/useScroll";
import CinemaContainer from "../../Layouts/CinemaContainer/CinemaContainer";
import HomeHeroSection from "../../Layouts/HomeHeroSection/HomeHeroSection";
import HomeDecoration from "./HomeDecoration";


const Home = () => {
  const [navBarYPosition, getNavBarPosition] = useScroll(false);
  const CinemaNumberToList = 4;

  return (
    <HomeDecoration>
      {window.addEventListener("scroll", getNavBarPosition)}
      <HomeHeroSection navBarYPosition={navBarYPosition} pageTitle = "Tout le septième art dans ton "/>
      <CinemaContainer
        cinemaGenre="A la une"
        numberOfCards={CinemaNumberToList}
      />
      <CinemaContainer
        cinemaGenre="A venir"
        numberOfCards={CinemaNumberToList}
      />
    </HomeDecoration>
  );
};

export default Home;
