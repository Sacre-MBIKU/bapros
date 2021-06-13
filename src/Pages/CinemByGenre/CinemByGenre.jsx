import CardsContainer from "../../Components/CardsContainer/CardsContainer";
import Navbar from "../../Layouts/Navbar/Navbar";
import CinemByGenreDecoration from "./CinemByGenreDecoration";

const CinemByGenre = ({ genre }) => {
  return (
    <CinemByGenreDecoration>
      <Navbar secondAppMode={true} />
      <main>
        <div className="cards-container-wrapper">
          <CardsContainer />
          <div className="filter"></div>
        </div>
      </main>
    </CinemByGenreDecoration>
  );
};

export default CinemByGenre;
