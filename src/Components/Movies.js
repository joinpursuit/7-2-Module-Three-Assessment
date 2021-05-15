import axios from "axios";
import { useState, useEffect } from "react";

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [selectedMovieUrl, setSelectedMovieUrl] = useState("");
  const [selectedMovie, setSelectedMovie] = useState({});

  const fetchMovies = async () => {
    try {
      const res = await axios.get("https://ghibliapi.herokuapp.com/films");
      setMovies(res.data);
    } catch (error) {
      setMovies([]);
    }
  };
  useEffect(() => {
    fetchMovies();
  }, []);

  const selectMovie = async (e) => {
    setSelectedMovieUrl(e.target.value);
    try {
      const res = await axios.get(
        `https://ghibliapi.herokuapp.com/films/${e.target.value}`
      );
      setSelectedMovie(res.data);
      console.log(res.data);
    } catch (error) {
      setSelectedMovie({});
    }
  };
  return (
    <section>
      <h1>Select a Movie</h1>
      <select value={selectedMovieUrl} onChange={selectMovie}>
        <option value="" selected></option>
        {movies.map((movieObj) => {
          return (
            <option key={movieObj.title} value={movieObj.id}>
              {movieObj.title}
            </option>
          );
        })}
      </select>
      <h1>Title: {selectedMovie.title}</h1>
      <h1>Release Date: {selectedMovie.release_date}</h1>
      <p>Description: {selectedMovie.description}</p>
    </section>
  );
};

export default Movies;
