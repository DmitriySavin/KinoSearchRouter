import { useState } from "react";
import searchMovieFetch from "../API/searchmovie";

const Movies = () => {
  const [query, setQuery] = useState("");
  const [movie, setMovie] = useState(null);

  const changeQuery = (value) => {
    setQuery(value);
  };

  const newFetch = () => {
    searchMovieFetch(query).then((movieApi) => {
      setMovie(movieApi.results[0]);
    });
  };

  return (
    <>
      <label>
        Movie?
        <input
          type="text"
          value={query}
          onChange={(e) => changeQuery(e.target.value)}
        />
      </label>
      <button type="button" onClick={newFetch}>
        Search
      </button>

      {movie && (
        <div>
          <h2>{movie.title}</h2>
          <img
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            alt={movie.title}
          />
        </div>
      )}
    </>
  );
};

export default Movies;
