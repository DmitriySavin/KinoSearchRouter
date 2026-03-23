import { useState, useEffect, use } from "react";
import allMoviesFetch from "../../API/api-service";

export const TheBestMovies = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    allMoviesFetch().then((moviesApi) => {
      setMovies(moviesApi.slice(o , 20));
    }, []);
  });

  return (
    <h2>
      sdasd
    </h2>
  );
};
