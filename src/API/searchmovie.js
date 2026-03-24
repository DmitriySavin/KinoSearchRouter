const BASE_API = "8f32040c312d9f1074e355bf73af6993";
const BASE_URL = "https://api.themoviedb.org/3/";

export const searchMovieFetch = ( query ) => {
  return fetch(
    `${BASE_URL}search/movie?api_key=${BASE_API}&query=${query}&include_adult=false&language=en-US&page=1`,
  )
    .then((res) => res.json())
    .catch("error");
};

export default searchMovieFetch;
