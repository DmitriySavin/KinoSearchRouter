import { useState, useEffect, use } from "react";
import { allMoviesFetch } from "../../API/api-service";
import { getMoviesById } from "../../API/api-service";
import { Link } from "react-router-dom";

export const TheBestMovies = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    allMoviesFetch().then((moviesApi) => {
      setMovies(moviesApi.results.slice(0, 20));
    });
  }, []);

  return (
    <ul>
      {movies.map((movie) => {
        return (
          <li key={movie.title}>
            <Link to={`/movies/${movie.id}`}>{movie.title}</Link>
            <img
              src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`}
              alt={movie.title}
            />
          </li>
        );
      })}
    </ul>
  );
};
