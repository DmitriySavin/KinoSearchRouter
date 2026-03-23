export const searchMovieFetch = () => {
  return fetch(
    `${BASE_URL}search/movie?api_key=${BASE_API}&query=${"@"}&include_adult=false&language=en-US&page=1`,
  )
    .then((res) => res.json())
    .catch("error");
};

export const searchMovieFromIdFetch = () => {
  return fetch(
    `${BASE_URL}movie/${movie_id}/credits?api_key=${BASE_API}&language=en-US`,
  )
    .then((res) => res.json())
    .catch("error");
};

export const searchReviewMovieFetch = () => {
  return fetch(
    `${BASE_URL}movie/${movie_id}/reviews?api_key=${BASE_API}&language=en-US&page=1`,
  )
    .then((res) => res.json())
    .catch("error");
};
