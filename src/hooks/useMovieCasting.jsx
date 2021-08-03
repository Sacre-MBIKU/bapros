import { useEffect, useState } from "react";

const useMovieCasting = (genreCinema,idOfMovie) => {
  const [loading, setLoading] = useState(true);
  const [movieInfoCredits, setMovieInfoCredits] = useState({});
  const api_key = "fb1dcf94078665e3203add8e98cca345";
  const url = `https://api.themoviedb.org/3/${genreCinema}/${idOfMovie}/credits?api_key=${api_key}&language=fr-FR`;

  useEffect(() => {
    fetch(url)
      .then((response) => {
        return response.json();
      })
      .then(({ cast, crew }) => {
        let results;
        let director = {};
        let actors = [];
        if (crew !== undefined) {
          director = crew.find(({ job }) => job === "Director");
        }
        if (cast !== undefined) {
          actors = cast.filter(({ order }) => order <= 3);
        }
        results = { director: director, actors: actors };
        setMovieInfoCredits(results);
        setLoading(false);
      });
    return <div>{loading ? <p>loading...</p> : <p>Fetched!!</p>}</div>;
  }, [url, loading, idOfMovie]);
  return movieInfoCredits;
};

export default useMovieCasting;
