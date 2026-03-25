import { useParams } from "react-router-dom";
import { getMoviesById } from "../API/api-service";
import { useEffect, useState } from "react";

export const MovieDetails = () => {
  const { moviesId } = useParams();
  const [movie, setMovie] = useState();

  useEffect(() => {
    getMoviesById(moviesId).then(setMovie);
  }, [moviesId]);

  return (
    <>
      <h2>Movie Info</h2>
      {!movie ? (
        <p>Loading...</p>
      ) : (
        <>
          <p>{movie.title}</p>
          <img
            src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`}
            alt="movie"
          />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi,
            laboriosam!
          </p>
        </>
      )}
    </>
  );
};
