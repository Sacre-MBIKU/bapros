import { Link } from "react-router-dom/cjs/react-router-dom.min";
import CardsContainer from "../../Components/CardsContainer/CardsContainer";
import TitleCategory from "../../Components/TitleCategory/TitleCategory";
import Button from "../../Shared_Components/Button/Button";
import CinemaContainerDecoration from "./CinemaContainerDecoration";

const CinemaContainer = ({
  numberOfCards,
  cinemaGenre,
  width,
  seeMoreButton,
  onClick,
}) => {
  return (
    <CinemaContainerDecoration width={width}>
      <TitleCategory title={cinemaGenre} />
      <CardsContainer numberOfCards={numberOfCards} onClick={onClick} />
      {seeMoreButton !== false ? (
        <>
          <div className="see-more-container">
            <Link to="/cinemaByGenre">
              <Button>voir plus</Button>
            </Link>
          </div>
          <div className="border-bottom">
            <hr />
          </div>
        </>
      ) : (
        ""
      )}
    </CinemaContainerDecoration>
  );
};

export default CinemaContainer;
