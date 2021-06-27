import { Link } from "react-router-dom/cjs/react-router-dom.min";
import CardsContainer from "../../Components/CardsContainer/CardsContainer";
import TitleCategory from "../../Components/TitleCategory/TitleCategory";
import useMovieByGenre from "../../hooks/useMovieByGenre";
import Button from "../../Shared_Components/Button/Button";
import CinemaContainerDecoration from "./CinemaContainerDecoration";

const CinemaContainer = ({
  numberOfCards,
  cinemaGenre,
  idOfGenre,
  nameOfGenre,
  frenchNameOfGenre,
  width,
  seeMoreButton,
  onClick,
}) => {
  const movies = useMovieByGenre(cinemaGenre, nameOfGenre);
  return (
    <CinemaContainerDecoration width={width}>
      <TitleCategory title={frenchNameOfGenre} />
      <CardsContainer
        cinemaList={movies}
        numberOfCards={numberOfCards}
        onClick={onClick}
      />
      {seeMoreButton !== false ? (
        <>
          <div className="see-more-container">
            <Link to={`/cinemabygenre/${nameOfGenre}`}>
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
