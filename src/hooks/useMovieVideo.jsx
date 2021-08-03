import { useEffect, useState } from "react";

const useMovieVideo = (genreCinema,idOfMovie) => {
  const [loading, setLoading] = useState(true);
  const [movieVideoKey, setMovieVideoKey] = useState([]);
  const api_key = "fb1dcf94078665e3203add8e98cca345";
  const url = `https://api.themoviedb.org/3/${genreCinema}/${idOfMovie}/videos?api_key=${api_key}&language=fr-FR`;

  useEffect(() => {
    fetch(url)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        let results;
        if (data.results !== undefined && data.results[0] !== undefined ) {
          results = data.results[0].key;
        } else {
            results = ""
        }
        setMovieVideoKey(results);
        setLoading(false);
      });
    return <div>{loading ? <p>loading...</p> : <p>Fetched!!</p>}</div>;
  }, [url, loading]);
  return movieVideoKey;
};

export default useMovieVideo;
