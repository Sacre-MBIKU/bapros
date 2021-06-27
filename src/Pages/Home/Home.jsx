import { useState } from "react";
import useScroll from "../../hooks/useScroll";
import CinemaContainer from "../../Layouts/CinemaContainer/CinemaContainer";
import HomeHeroSection from "../../Layouts/HomeHeroSection/HomeHeroSection";
import HomeDecoration from "./HomeDecoration";
import CinemaDescription from "../../Shared_Components/CinemaDescription/CinemaDescription";

const Home = () => {
  const [navBarYPosition, getNavBarPosition] = useScroll(false);
  const [cinemaDescription, setCinemaDescription] = useState(false);
  const cinemaNumberToList = 4;

  const handleCinemaDescriptionState = () => {
    setCinemaDescription(!cinemaDescription);
    window.scrollTo(0, 0);
  };

  return (
    <HomeDecoration>
      {window.addEventListener("scroll", getNavBarPosition)}
      <HomeHeroSection
        navBarYPosition={navBarYPosition}
        pageTitle="Tout le septième art dans ton "
      />
      <CinemaContainer
        frenchNameOfGenre="Mieux notés"
        cinemaGenre="movie"
        nameOfGenre="top_rated"
        numberOfCards={cinemaNumberToList}
        onClick={handleCinemaDescriptionState}
      />
      <CinemaContainer
        frenchNameOfGenre="A venir"
        cinemaGenre="movie"
        nameOfGenre="upcoming"
        numberOfCards={cinemaNumberToList}
        onClick={handleCinemaDescriptionState}
      />
      <CinemaDescription cinemaDescription = {cinemaDescription} onClick = {handleCinemaDescriptionState} />
    </HomeDecoration>
  );
};

export default Home;
