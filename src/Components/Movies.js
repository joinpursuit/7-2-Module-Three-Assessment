import axios from "axios";
import { Component } from "react";
import "./Movies.css";

class Movies extends Component {
  state = { movies: [], selectedMovie: {} };

  fetchMovies = async () => {
    try {
      const res = await axios.get("https://ghibliapi.herokuapp.com/films/");
      this.setState({ movies: res.data });
      // debugger
    } catch (error) {
      this.setState({ movies: [] });
    }
  };

  componentDidMount() {
    this.fetchMovies();
  }

  selectMovie = async (e) => {
    try {
      const res = await axios.get(`https://ghibliapi.herokuapp.com/films/${e.target.value}`);
      this.setState({ selectedMovie: res.data});
    } catch (error) {
      this.setState({ selectedMovie: {} });
    }
 
  };

  render() {
    const { movies, selectedMovie } = this.state;
    return (
      <section className="MovieContainer">
        <h1 style={{ color: "yellow" }}>Select a Movie</h1>
        <select id="" onChange={this.selectMovie}>
          <option value="" ></option>
          {movies.map((movieObj) => {
            return <option key={movieObj.id} value={movieObj.id}>{movieObj.title}</option>;
          })}
        </select>
        <h3 style={{ color: "yellow" }}>{selectedMovie.title}</h3>
        <p style={{ color: "yellow" }}>{selectedMovie.release_date}</p>
        <p style={{ color: "yellow" }}>{selectedMovie.description}</p>
      </section>
    );
  }
}

export default Movies;
