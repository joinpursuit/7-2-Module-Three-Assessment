import axios from "axios";
import { useState, useEffect } from "react";

const Movies = () => {
  const [movies, setMovies] = useState([]);

  const fetchMovies = async () => {
    try {
      const res = await axios.get("https://ghibliapi.herokuapp.com/films/");
      setMovies(res.data);
    } catch (error) {
      console.log(error);
      setMovies([]);
    }
  };

  useEffect(() => {
    fetchMovies();
  }, []);

  return (
    <section id="Movies">
      <h1>Select a Movie</h1>
      <select>
        <option value=""></option>
        {movies.map((movie) => {
          return (
            <option value={movie.id} key={movie.id}>
              {movie.title}
            </option>
          );
        })}
        <option />
      </select>
    </section>
  );
};

export default Movies;
