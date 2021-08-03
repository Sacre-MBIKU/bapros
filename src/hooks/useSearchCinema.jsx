import { useEffect, useState } from "react";

const useSearchCinema = (cinemaGenre, cinemaLookedFor) => {
  const [cineList, setCineList] = useState([]);
  const [loading, setLoading] = useState(true);
  const api_key = "fb1dcf94078665e3203add8e98cca345";

  const url = `https://api.themoviedb.org/3/search/${cinemaGenre}?api_key=${api_key}&language=fr-FR&page=1&query=${cinemaLookedFor}&include_adult=false`;

  useEffect(() => {
    fetch(url)
      .then((response) => {
        return response.json();
      })
      .then((listOfCines) => {
        setCineList(listOfCines.results);
        setLoading(false);
      });
      return <div>{loading ? <p>loading...</p> : <p>Fetched!!</p>}</div>

  }, [url, loading]);

    return [cineList, loading];
  
};

export default useSearchCinema;
