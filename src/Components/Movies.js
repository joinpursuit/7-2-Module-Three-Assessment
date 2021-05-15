import axios from "axios";
import { useState, useEffect } from "react";

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [movieId, setMovieId] = useState("");
  const [currentMovie, setCurrentMovie] = useState("");
  const [releaseDate, setReleaseDate] = useState("")
  const [description, setDescription] = useState("")

  const fetchMovies = async () => {
    try {
      const res = await axios.get(`https://ghibliapi.herokuapp.com/films`);

      setMovies(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  const selectMovie = (e) => {
    fetchMovieInfo(e.target.value);
  };

  const fetchMovieInfo = async (id) => {
    try {
      const res = await axios.get(
        `https://ghibliapi.herokuapp.com/films/${id}`
      );
      setMovieId(id)
      setCurrentMovie(res.data.title)
      setReleaseDate(res.data.release_date)
      setDescription(res.data.description)

     
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchMovies();
  }, []);

  return (
    <div>
      <h1>Select a Movie</h1>
      <select defaultValue="" onChange={selectMovie}>
        <option value=""></option>
        {movies.map((movie) => {
          return (
            <option value={movie.id} key={movie.title}>
              {movie.title}
            </option>
          );
        })}
      </select>

     {currentMovie && <h1>Title: {currentMovie}</h1>}
      {releaseDate && <p>Release Date: {releaseDate}</p>}
      {description && <p>Description: {description}</p>}
    </div>
  );
};

export default Movies;
