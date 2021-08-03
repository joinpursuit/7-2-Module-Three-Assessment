import axios from "axios";
import { useState, useEffect } from "react";

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [title, setTitle] = useState("");
  const [release_date, setRelease_date] = useState("");
  const [description, setDescription] = useState("");

  const handleChange = async (e) => {
    const id = e.target.value;
    try {
      const res = await axios.get(
        `https://ghibliapi.herokuapp.com/films/${id}`
      );
      const movie = res.data;
      setTitle(movie.title);
      setRelease_date(movie.release_date);
      setDescription(movie.description);
    } catch (error) {
      setTitle("");
      setRelease_date("");
      setDescription("");
    }
  };

  const fetchMovies = async () => {
    try {
      const res = await axios.get("https://ghibliapi.herokuapp.com/films");
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
      <select onChange={handleChange}>
        <option value="null"></option>
        {movies.map((movie) => {
          return (
            <option value={movie.id} key={movie.id}>
              {movie.title}
            </option>
          );
        })}
        <option />
      </select>
      <section>
        <h2>{title}</h2>
        <h3>{release_date}</h3>
        <p>{description}</p>
      </section>
    </section>
  );
};

export default Movies;
