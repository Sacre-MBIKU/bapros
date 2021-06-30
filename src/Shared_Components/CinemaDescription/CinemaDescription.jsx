import CinemaDescriptionDecoration from "./CinemaDescriptionDecoration";
import CinemaDescriptionBox from "../../Components/CinemaDescriptionBox/CinemaDescriptionBox";
import useMovieCredits from "../../hooks/useMovieCredits";
const CinemaDescription = ({ cinemaDescription, onClick, currentMovieId }) => {
  const movieCredits = useMovieCredits(currentMovieId);
  return (
    <CinemaDescriptionDecoration cinemaDescription={cinemaDescription}>
      {console.dir(currentMovieId)}
      <CinemaDescriptionBox movieCredits = {movieCredits} pageTitle={movieCredits.title} onClick={onClick} />
    </CinemaDescriptionDecoration>
  );
};

export default CinemaDescription;
