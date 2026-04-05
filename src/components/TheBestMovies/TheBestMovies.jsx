import { useState, useEffect } from "react";
import { allMoviesFetch } from "../../API/api-service";
// import { getMoviesById } from "../../API/api-service";
import { Link } from "react-router-dom";
import styles from "../TheBestMovies/TheBestMovies.module.css";

const TheBestMovies = () => {
  const [movies, setMovies] = useState([]);

  console.log(movies);

  useEffect(() => {
    allMoviesFetch().then((moviesApi) => {
      setMovies(moviesApi.results.slice(0, 20));
    });
  }, []);

  return (
    <div>
      <h2>Trending today</h2>

      <ul className={styles.list}>
        {movies.map((movie) => {
          return (
            <li key={movie.title} className={styles.item}>
              <Link to={`/movies/${movie.id}`} className={styles.title}>
                {movie.title}
              </Link>
              <img
                src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`}
                alt={movie.title}
                className={styles}
              />
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default TheBestMovies;
