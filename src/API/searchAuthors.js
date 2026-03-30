const BASE_API = "8f32040c312d9f1074e355bf73af6993";
const BASE_URL = "https://api.themoviedb.org/3/";

const searchAuthorsMovie = (moviesId) => {
  return fetch(
    `${BASE_URL}movie/${moviesId}/credits?api_key=${BASE_API}&language=en-US`,
  )
    .then((res) => res.json())
    .catch("error");
};

export default searchAuthorsMovie;
