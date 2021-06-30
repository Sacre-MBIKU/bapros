import { useEffect, useState } from "react";

const useMovieCredits = (idOfMovie) => {
  const [loading, setLoading] = useState(true);
  const [movieInfoCredits, setMovieInfoCredits] = useState([]);
  const api_key = "fb1dcf94078665e3203add8e98cca345";
  const url = `https://api.themoviedb.org/3/movie/${idOfMovie}?api_key=${api_key}&language=fr-FR`;

  useEffect(() => {
    fetch(url)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
          let results;
        if(data !== undefined) {
             results = {
                overview: data.overview,
                title: data.title,
                backdrop_path: data.backdrop_path,
                popularity: data.popularity,
                production_companies: data.production_companies === undefined ? "" : data.production_companies[0].name,
                genres :data.genres === undefined ? "" : data.genres[0].name
              };
        }
        setMovieInfoCredits(results);
        setLoading(false);
      });
    return <div>{loading ? <p>loading...</p> : <p>Fetched!!</p>}</div>;
  }, [url, loading, idOfMovie]);
  return movieInfoCredits;
};

export default useMovieCredits;
