import { useState } from "react";
import useScroll from "../../hooks/useScroll";
import HomeHeroSection from "../../Layouts/HomeHeroSection/HomeHeroSection";
import HomeDecoration from "./HomeDecoration";
import CinemaDescription from "../../Shared_Components/CinemaDescription/CinemaDescription";

const Home = () => {
  const [navBarYPosition, getNavBarPosition] = useScroll(false);
  const [cinemaDescription, setCinemaDescription] = useState(false);

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
      <CinemaDescription
        cinemaDescription={cinemaDescription}
        onClick={handleCinemaDescriptionState}
      />
    </HomeDecoration>
  );
};

export default Home;
