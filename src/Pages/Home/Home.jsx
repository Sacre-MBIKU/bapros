import { useState } from "react";
import CinemaContainer from "../../Layouts/CinemaContainer/CinemaContainer";
import HomeHeroSection from "../../Layouts/HomeHeroSection/HomeHeroSection";
import HomeDecoration from "./HomeDecoration";

const Home = () => {
  const [navBarYPosition, setNavBarYPosition] = useState(false);
  const CinemaNumberToList = 4;
  const getNavBarPosition = () => {
    const { scrollTop } = document.documentElement;
    if (scrollTop >= 100) {
      setNavBarYPosition(true);
    } else {
      setNavBarYPosition(false);
    }
  };

  return (
    <HomeDecoration>
      {window.addEventListener("scroll", getNavBarPosition)}
      <HomeHeroSection navBarYPosition={navBarYPosition} />
      <CinemaContainer cinemaGenre="A la une" numberOfCards={CinemaNumberToList} />
      <CinemaContainer cinemaGenre="A venir" numberOfCards={CinemaNumberToList} />
    </HomeDecoration>
  );
};

export default Home;
