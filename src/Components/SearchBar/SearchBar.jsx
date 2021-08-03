import { useState } from "react";
import useSearchCinema from "../../hooks/useSearchCinema";
import SearchBarDecoration from "./SearchBarDecoration";

const SearchBar = ({ secondAppMode }) => {
  const [userMovieSearchedWord, setUserMovieSearchedWord] = useState("");
  const [movie, loading] = useSearchCinema("movie", userMovieSearchedWord);
  const getCinemaSearched = (event) => {
    event.preventDefault();
    const movieSearched = event.target[0].value;
    setUserMovieSearchedWord(movieSearched);

    if (!loading) {
      console.dir("form", userMovieSearchedWord);
      console.dir("movie", movie);
    }
  };
  return (
    <>
      <SearchBarDecoration
        onSubmit={getCinemaSearched}
        secondAppMode={secondAppMode}
      >
        <input
          type='search'
          name='input-search'
          id='input-search'
          className='input-search'
          placeholder='trouver votre cinema'
        />
        <button type='submit' className='submit-button'></button>
      </SearchBarDecoration>
    </>
  );
};

export default SearchBar;
