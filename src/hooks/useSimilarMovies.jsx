import { useEffect, useState } from "react";

const useSimilarMovies = (genreCinema, idOfMovie) => {
  const [loading, setLoading] = useState(true);
  const [similarMovies, setSimilarMovies] = useState({});
  const api_key = "fb1dcf94078665e3203add8e98cca345";
  const url = `https://api.themoviedb.org/3/${genreCinema}/${idOfMovie}/similar?api_key=${api_key}&language=fr-FR`;

  useEffect(() => {
    fetch(url)
      .then((response) => {
        return response.json();
      })
      .then((results) => {
        let movies = [];
        if (results.results !== undefined) {
          for(let i = 0; i <= 3; i++) {
            movies.push(results.results[i]);
            console.log("movies in", movies[i])
          }
        }
        setSimilarMovies(movies);
        console.log("movies out", movies)
        setLoading(false);
      });
    return <div>{loading ? <p>loading...</p> : <p>Fetched!!</p>}</div>;
  }, [url, loading, idOfMovie]);
  return similarMovies;
};

export default useSimilarMovies;
