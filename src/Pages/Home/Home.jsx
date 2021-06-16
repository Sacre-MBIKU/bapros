import { useState } from "react";
import useScroll from "../../hooks/useScroll";
import CinemaContainer from "../../Layouts/CinemaContainer/CinemaContainer";
import HomeHeroSection from "../../Layouts/HomeHeroSection/HomeHeroSection";
import CinemaDescription from "../../Shared_Components/CinemaDescription/CinemaDescription";
import HomeDecoration from "./HomeDecoration";

const Home = () => {
  const [navBarYPosition, getNavBarPosition] = useScroll(false);
  const [cinemaDescription, setCinemaDescription] = useState(false);
  const cinemaNumberToList = 4;
  const API_NAME = process.env.API_NAME;

  const handleCinemaDescriptionState = () => {
    setCinemaDescription(!cinemaDescription);
    window.scrollTo(0, 0);
  };

  return (
    <HomeDecoration>
      {console.log(API_NAME)}
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
        onClick={handleCinemaDescriptionState}
      />
      <CinemaDescription
        cinemaDescription={cinemaDescription}
        onClick={handleCinemaDescriptionState}
      />
    </HomeDecoration>
  );
};

export default Home;
