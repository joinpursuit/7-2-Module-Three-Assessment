import { useState, useEffect } from "react";
import axios from "axios";
import "./movies.css";


const Movies = () => {
  const [movie, setMovie] = useState({});
  const [movieList, setMovieList] = useState([])

  const fetchMovies = async () => {
    try {
      const {data} = await axios.get("https://ghibliapi.herokuapp.com/films");
      setMovieList(data)
    } catch (error) {
        setMovieList([])
    }
  };

  useEffect(() => {
    fetchMovies();
  }, []);

  const selectMovie = async (e) => {
      const id = e.target.value;
    try {
        const {data} = await axios.get(`https://ghibliapi.herokuapp.com/films/${id}`);
    setMovie(data);
    } catch (error) {
        setMovie({});
    }
  };


  return (
    <section className="movieSection">
      <h1>Select a Movie</h1>
      <select defaultValue={''} onChange={selectMovie}>
      <option value=""></option>
        {movieList.map(movie=><option key={movie.id} value={movie.id}>{movie.title}</option>)}
      </select>
      {
      <><h1>Title: {movie.title}</h1>
      <p>Release Date: {movie.release_date}</p>
      <p>Description: {movie.description}</p>
      </>
    }
    </section>
  );
};

export default Movies;
