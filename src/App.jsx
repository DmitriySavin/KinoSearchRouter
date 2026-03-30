import { Routes, Route, NavLink } from "react-router-dom";
import { lazy, Suspense } from "react";
import TheBestMovies from "./components/TheBestMovies/TheBestMovies";
import styles from './App.module.css'

const Movies = lazy(() => import("./components/Movies"));
const MovieDetails = lazy(() => import("./components/MovieDetails/MovieDetails"));
const Error = lazy(() => import("./components/Error"));
const Cast = lazy(() => import("./components/cast"));
const Rewievs = lazy(() => import("./components/rewievs/Rewievs"));


const App = () => {
  return (
    <>
      <nav className={styles.navigation}>
        <NavLink to="/" className={styles.link}>Home</NavLink>
        <NavLink to="/searchmovie" className={styles.link}>Movies</NavLink>
        {/* <NavLink to='/'></NavLink> */}
      </nav>
      <Suspense fallback={"Loading..."}>
        <Routes>
          <Route path="/" element={<TheBestMovies />} />

          <Route path="/searchmovie" element={<Movies />} />
          <Route path="/movies/:moviesId" element={<MovieDetails />}>
            <Route  path="cast" element={<Cast />} />
            <Route path="rewievs" element={<Rewievs />} />
          </Route>

          <Route path="*" element={<Error />} />
        </Routes>
      </Suspense>
    </>
  );
};

export default App;
