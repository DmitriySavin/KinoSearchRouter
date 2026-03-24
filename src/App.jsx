import { Routes, Route, NavLink } from "react-router-dom";
import { TheBestMovies } from "./components/TheBestMovies/TheBestMovies";
import { Error } from "./components/error";
import { Movies } from "./components/Movies";
const App = () => {
  return (
    <>
      <nav>
        <NavLink to='/'>Home</NavLink>
        <NavLink to='/searchmovie'>Movies</NavLink>
        {/* <NavLink to='/'></NavLink> */}
      </nav>

      <Routes>
        <Route path="/" element={<TheBestMovies />} />
        <Route path="/searchmovie" element={<Movies />}></Route>
        <Route path="*" element={<Error/> } />
      </Routes>
    </>
  );
};

export default App;
