import { useParams, Link } from "react-router-dom";
import searchReviewMovie from "../../API/searchReviews";
import { useEffect, useState } from "react";
import { FaRegEyeSlash } from "react-icons/fa";

const Rewievs = () => {
  const { moviesId } = useParams();
  const [reviews, setReviews] = useState(null);

  console.log(reviews);

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
        {results.length === 0 ? (
          <li>We dont have any review in this movie</li>
        ) : (
          results.map((result) => (
            <li key={result.id || result.author}>{result.author}</li>
          ))
        )}
      </ul>
    </>
  );
};

export default Rewievs;
