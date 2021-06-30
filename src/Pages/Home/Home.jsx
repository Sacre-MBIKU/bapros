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
  const [currentMovieId, setCurrentMovieId] = useState(-1);
  const [indexGenreToRender, setIsScrollTouchBottom] = useScrollInfinite();

  const handleCinemaDescriptionState = (event) => {
    setCurrentMovieId(event.currentTarget.dataset.id);
    console.dir("currentTarget",event.currentTarget.dataset.id);
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
      <HomeCinemaList
        currentGenreIndex={indexGenreToRender}
        onClick={handleCinemaDescriptionState}
      />
      {currentMovieId !== -1 ? (
        <CinemaDescription
          cinemaDescription={cinemaDescription}
          currentMovieId={currentMovieId}
          onClick={handleCinemaDescriptionState}
        />
      ) : (
        ""
      )}
    </HomeDecoration>
  );
};

export default Home;
