import { Link } from "react-router-dom/cjs/react-router-dom.min";
import CardsContainer from "../../Components/CardsContainer/CardsContainer";
import TitleCategory from "../../Components/TitleCategory/TitleCategory";
import useMovieByGenre from "../../hooks/useMovieByGenre";
import Button from "../../Shared_Components/Button/Button";
import CinemaContainerDecoration from "./CinemaContainerDecoration";

const CinemaContainer = ({
  numberOfCards,
  cinemaTitle,
  cinemaGenre,
  idOfGenre,
  width,
  seeMoreButton,
  onClick,
  tv
}) => {
  const [movies, ] = useMovieByGenre(cinemaGenre, idOfGenre);
  return (
    <CinemaContainerDecoration width={width}>
      <TitleCategory title={cinemaTitle} />
      <CardsContainer
        cinemaList={movies}
        numberOfCards={numberOfCards}
        onClick={onClick}
        tv = {tv}
      />
      {seeMoreButton !== false ? (
        <>
          <div className="see-more-container">
            <Link to={`/cinemabygenre/${idOfGenre}`}>
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
