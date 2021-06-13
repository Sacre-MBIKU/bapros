import CinemaContainer from "../../Layouts/CinemaContainer/CinemaContainer";
import Navbar from "../../Layouts/Navbar/Navbar";
import CinemByGenreDecoration from "./CinemByGenreDecoration";

const CinemByGenre = ({ genre }) => {
  return (
    <CinemByGenreDecoration>
      <Navbar secondAppMode={true} />
      <main>
        <div className="cards-container-wrapper">
          <CinemaContainer  cinemaGenre="A la une" width seeMoreButton = {false}/>
          <aside className="filter"></aside>
          <div className="filter-hamburger">
              <button>Choisir le genre </button>
          </div>
        </div>
      </main>
    </CinemByGenreDecoration>
  );
};

export default CinemByGenre;
