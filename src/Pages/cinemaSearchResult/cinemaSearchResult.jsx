import { useState } from "react";
import useScroll from "../../hooks/useScroll";
import CinemaContainer from "../../Layouts/CinemaContainer/CinemaContainer";
import Navbar from "../../Layouts/Navbar/Navbar";
import CinemaDescription from "../../Shared_Components/CinemaDescription/CinemaDescription";
import cinemaSearchResultDecoration from "./cinemaSearchResultDecoration";

const CinemaSearchResult = (cinemaResult) => {
  const [navBarYPosition, getNavBarPosition] = useScroll(false);
  const [cinemaDescription, setCinemaDescription] = useState(false);
  const [currentMovieId, setCurrentMovieId] = useState(-1);
  const handleCinemaDescriptionState = (event) => {
    setCurrentMovieId(event.currentTarget.dataset.id);
    setCinemaDescription(!cinemaDescription);
    window.scrollTo(0, 0);
  };
  return (
    <cinemaSearchResultDecoration>
      <Navbar secondAppMode={true} />
      <main>
        <div className='cards-container-wrapper'>
          {cinemaResult.map((card) => (
            <CinemaContainer
              cinemaTitle={card.name}
              seeMoreButton={false}
              tv
              width='true'
            />
          ))}
        </div>
      </main>

      <CinemaDescription
        cinemaDescription={cinemaDescription}
        onClick={handleCinemaDescriptionState}
      />
    </cinemaSearchResultDecoration>
  );
};

export default CinemaSearchResult;
