import { useEffect, useState } from "react";

const useGenrCinema = (cinemaGenre) => {
  const [genreCinemaList, setGenreCinemaList] = useState([]);
  const [loading, setLoading] = useState(true);
  const api_key = "fb1dcf94078665e3203add8e98cca345";
  const url = `https://api.themoviedb.org/3/genre/${cinemaGenre}/list?api_key=${api_key}&language=fr-FR`;

  useEffect(() => {
    fetch(url)
      .then((response) => {
        return response.json();
      })
      .then((listOfGenres) => {
        setGenreCinemaList(listOfGenres.genres);
        console.dir("movies", listOfGenres.genres);
        setLoading(false);
      });
  }, [url]);

  if (loading === false) {
    return genreCinemaList;
  }
};

export default useGenrCinema;
