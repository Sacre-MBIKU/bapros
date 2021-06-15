import { useState } from "react";
import useScroll from "../../hooks/useScroll";
import CinemaContainer from "../../Layouts/CinemaContainer/CinemaContainer";
import HomeHeroSection from "../../Layouts/HomeHeroSection/HomeHeroSection";
import CinemaDescription from "../../Shared_Components/CinemaDescription/CinemaDescription";
import HomeDecoration from "./HomeDecoration";

const Home = () => {
  const [navBarYPosition, getNavBarPosition] = useScroll(false);
  const [cinemaDescription, setCinemaDescription] = useState(true);
  const cinemaNumberToList = 4;

  const handleCinemaDescriptionState = () => {
    setCinemaDescription(!cinemaDescription);
  };

  return (
    <HomeDecoration>
      {window.addEventListener("scroll", getNavBarPosition)}
      <HomeHeroSection
        navBarYPosition={navBarYPosition}
        pageTitle="Tout le septième art dans ton "
      />
      <CinemaContainer
        cinemaGenre="A la une"
        numberOfCards={cinemaNumberToList}
        onClick={handleCinemaDescriptionState}
      />
      <CinemaContainer
        cinemaGenre="A venir"
        numberOfCards={cinemaNumberToList}
      />
      <CinemaDescription
        cinemaDescription={cinemaDescription}
        onClick={handleCinemaDescriptionState}
      />
    </HomeDecoration>
  );
};

export default Home;
