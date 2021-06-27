import { useEffect, useState } from "react";

const useMovieByGenre = (cinemaGenre, idOfGenre) => {
  const [cineList, setCineList] = useState([]);
  const [loading, setLoading] = useState(true);
  const api_key = "fb1dcf94078665e3203add8e98cca345";

  const url = `https://api.themoviedb.org/3/discover/${cinemaGenre}?api_key=${api_key}&&with_genres=${idOfGenre}&language=fr-FR`;

  useEffect(() => {
    fetch(url)
      .then((response) => {
        return response.json();
      })
      .then((listOfCines) => {
        setCineList(listOfCines.results);
        setLoading(false);
      });
  }, [url]);

    return [cineList, loading];
  
};

export default useMovieByGenre;
