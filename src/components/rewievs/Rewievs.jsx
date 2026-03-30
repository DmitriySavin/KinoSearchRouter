import { useParams , Link } from "react-router-dom";
import searchReviewMovie from "../../API/searchReviews";
import { useEffect, useState } from "react";
import { FaRegEyeSlash } from "react-icons/fa";

const Rewievs = () => {
  const { moviesId } = useParams();
  const [reviews, setReviews] = useState(null);

  useEffect(() => {
    searchReviewMovie(moviesId).then(setReviews);
  }, [moviesId]);

  const results = reviews?.results || [];

  console.log(results);

  return (
    <>
      <Link to={`/movies/${moviesId}`}>
        <FaRegEyeSlash color="white" size={20} />
      </Link>

      <ul>
        {results.map((result) => (
          <li key={result.author}>{result.author}</li>
        ))}
      </ul>
    </>
  );
};

export default Rewievs;
