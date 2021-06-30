import CinemaDescriptionDecoration from "./CinemaDescriptionDecoration";
import CinemaDescriptionBox from "../../Components/CinemaDescriptionBox/CinemaDescriptionBox";
import useMovieCredits from "../../hooks/useMovieCredits";
import useMovieCasting from "../../hooks/useMovieCasting";
const CinemaDescription = ({ cinemaDescription, onClick, currentMovieId }) => {
  const movieCredits = useMovieCredits(currentMovieId);
  const movieCasting = useMovieCasting(currentMovieId);
  return (
    <CinemaDescriptionDecoration cinemaDescription={cinemaDescription}>
      {console.dir(currentMovieId)}
      <CinemaDescriptionBox
        movieCredits={movieCredits}
        movieCasting = {movieCasting}
        pageTitle={movieCredits.title}
        onClick={onClick}
      />
    </CinemaDescriptionDecoration>
  );
};

export default CinemaDescription;
