const BASE_API = "8f32040c312d9f1074e355bf73af6993";
const BASE_URL = "https://api.themoviedb.org/3";

const allMoviesFetch = () => {
    return fetch(
        `${BASE_URL}/trending/movie/day?api_key=${BASE_API}&page=1`
    )
    .then((res) => res.json())
    .catch('error');
};

export default allMoviesFetch;