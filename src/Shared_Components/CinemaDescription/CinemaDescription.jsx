import CinemaDescriptionDecoration from "./CinemaDescriptionDecoration";
import CinemaDescriptionBox from "../../Components/CinemaDescriptionBox/CinemaDescriptionBox";
import useMovieCredits from "../../hooks/useMovieCredits";
import useMovieCasting from "../../hooks/useMovieCasting";
import useSimilarMovies from "../../hooks/useSimilarMovies";
import useMovieVideo from "../../hooks/useMovieVideo";
const CinemaDescription = ({ genreCinema, cinemaDescription, onClick, currentMovieId }) => {
  const movieCredits = useMovieCredits(genreCinema, currentMovieId);
  const movieCasting = useMovieCasting(genreCinema,currentMovieId);
  const similarMovies = useSimilarMovies(genreCinema, currentMovieId)
  const videoKey = useMovieVideo(genreCinema, currentMovieId);
  return (
    <CinemaDescriptionDecoration cinemaDescription={cinemaDescription}>
      <CinemaDescriptionBox
        movieCredits={movieCredits}
        movieCasting = {movieCasting}
        similarMovies = {similarMovies}
        pageTitle={movieCredits.title}
        videoKey = {videoKey}
        onClick={onClick}
      />
    </CinemaDescriptionDecoration>
  );
};

export default CinemaDescription;
