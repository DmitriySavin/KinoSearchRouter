import { Link, useLocation, useParams } from "react-router-dom";
import searchAuthorsMovie from "../../API/searchAuthors";
import { useEffect, useState } from "react";
import { FaRegEyeSlash } from "react-icons/fa";
// import styles from "./Cast.module.css";

const Cast = () => {
  const [movie, setMovie] = useState(null);
  const { moviesId } = useParams();

  useEffect(() => {
    searchAuthorsMovie(moviesId).then(setMovie);
  }, [moviesId]);

  const authors = movie?.cast || [];

  return (
    <>
      <Link to={`/movies/${moviesId}`}>
        <FaRegEyeSlash color="white" size={20} />
      </Link>
      <ul>
        {authors.map((author) => (
          <li key={author.name}>{author.name}</li>
        ))}
      </ul>
    </>
  );
};

export default Cast;
