import React from "react";
import axios from "axios";

class Movies extends React.Component {
  state = { movies: [], movieValue: "", movieObj: {} };

  fecthMovie = async () => {
    try {
      const res = await axios.get(`https://ghibliapi.herokuapp.com/films`);
      this.setState({ movies: res.data });
    } catch (error) {
      console.log(error);
      this.setState({ movies: [] });
    }
  };

  componentDidMount() {
    this.fecthMovie();
  }

  selectMovie = async (e) => {
    this.setState({ movieValue: e.target.value });
    try {
      const res = await axios.get(
        `https://ghibliapi.herokuapp.com/films/${e.target.value}`
      );
      this.setState({ movieObj: res.data });
    } catch (error) {
      console.log(error);
      this.setState({ movieObj: {} });
    }
  };

  render() {
    const { movieValue, movies, movieObj } = this.state;
    const movieList = movies.map((movie) => {
      return (
        <option value={movie.id} key={movie.title}>
          {movie.title}
        </option>
      );
    });
    return (
      <section>
        <h1>Select a Movie</h1>
        <select onChange={this.selectMovie} value={movieValue}>
          <option defaultValue=""></option>
          {movieList}
        </select>
        <h1>Title: {movieObj.title}</h1>
        <p>Release Date: {movieObj.release_date}</p>
        <p>Description: {movieObj.description}</p>
      </section>
    );
  }
}

export default Movies;
