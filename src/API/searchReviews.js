const BASE_API = "8f32040c312d9f1074e355bf73af6993";
const BASE_URL = "https://api.themoviedb.org/3/";

 const searchReviewMovie = (moviesId) => {
  return fetch(
    `${BASE_URL}movie/${moviesId}/reviews?api_key=${BASE_API}&language=en-US&page=1`,
  )
    .then((res) => res.json())
    .catch("error");
};


export default searchReviewMovie