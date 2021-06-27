import { useState } from "react";
import useScroll from "../../hooks/useScroll";
import HomeHeroSection from "../../Layouts/HomeHeroSection/HomeHeroSection";
import HomeDecoration from "./HomeDecoration";
import CinemaDescription from "../../Shared_Components/CinemaDescription/CinemaDescription";
import HomeCinemaList from "../../Layouts/HomeCinemaList/HomeCinemaList";
import useScrollInfinite from "../../hooks/useScrollInfinite";

const Home = () => {
  const [navBarYPosition, getNavBarPosition] = useScroll(false);
  const [cinemaDescription, setCinemaDescription] = useState(false);
  const [indexGenreToRender, setIsScrollTouchBottom] = useScrollInfinite();

  const handleCinemaDescriptionState = () => {
    setCinemaDescription(!cinemaDescription);
    window.scrollTo(0, 0);
  };

  return (
    <HomeDecoration>
      {window.addEventListener("scroll", setIsScrollTouchBottom)}
      {window.addEventListener("scroll", getNavBarPosition)}
      <HomeHeroSection
        navBarYPosition={navBarYPosition}
        pageTitle="Tout le septième art dans ton "
      />
      <HomeCinemaList currentGenreIndex = {indexGenreToRender}  onClick={handleCinemaDescriptionState}/>
      <CinemaDescription
        cinemaDescription={cinemaDescription}
        onClick={handleCinemaDescriptionState}
      />
    </HomeDecoration>
  );
};

export default Home;
