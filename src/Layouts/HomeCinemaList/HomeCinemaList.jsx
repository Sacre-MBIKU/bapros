import HomeCinemaListDecoration from "./HomeCinemaListDecoration";
import useGenrCinema from "../../hooks/useGenrCinema";
import useMovieByGenre from "../../hooks/useMovieByGenre";
import { useEffect, useState } from "react";
import CinemaCard from "../../Shared_Components/CinemaCard/CinemaCard";

const HomeCinemaList = ({ currentGenreIndex, onClick }) => {
  const listOfGenre = useGenrCinema("movie");
  const loaderCardsArray = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
  ];
  let fetchedMovies;
  let loading;
  let currentGenre;
  if (listOfGenre !== undefined) {
    currentGenre = listOfGenre[currentGenreIndex].id;
  }
  [fetchedMovies, loading] = useMovieByGenre("movie", currentGenre);
  const [allMovies, setAllMovies] = useState([]);

  useEffect(() => {
    if (fetchedMovies !== undefined) {
      setAllMovies((movies) => [...movies, ...fetchedMovies]);
    }
  }, [currentGenreIndex, fetchedMovies]);

  const loaderCards = loaderCardsArray.map((card, key) => (
    <CinemaCard key={key} movieProperty={undefined} />
  ));

  return (
    <HomeCinemaListDecoration>
      {console.log("fetched movies", fetchedMovies)}
      {loading === true
        ? loaderCards
        : allMovies.map((movie, key) => (
            <CinemaCard key={key} movieProperty={movie} onClick = {onClick}></CinemaCard>
          ))}
    </HomeCinemaListDecoration>
  );
};

export default HomeCinemaList;
