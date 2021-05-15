import { Component } from "react";
import axios from "axios";

class Movies extends Component {
  state = { movies: [], URL: "", moviePicked: {} };

  fetchMovies = async () => {
    try {
      const res = await axios.get("https://ghibliapi.herokuapp.com/films/");
      this.setState({ movies: res.data });
    } catch (error) {
      this.setState({ movies: [] });
    }
  };

  componentDidMount() {
    this.fetchMovies();
  }

  pickMovies = async (e) => {
    this.setState({ URL: e.target.value });
    try {
      const res = await axios.get(e.target.value);
      this.setState({ moviePicked: res.data });
    } catch (error) {
      this.setState({ moviePicked: {} });
    }
  };

  render() {
    const { movies, URL, moviePicked } = this.state;
    return (
      <section>
        <h1>Select a Movie</h1>
        <select value={URL} onChange={this.pickMovies}>
          <option value=""></option>
          {movies.map((movies) => (
            <option key={movies.title} value={movies.url}>
              {movies.title}
            </option>
          ))}
        </select>
        <h1>{moviePicked.title}</h1>
        <h1> Release Date: {moviePicked.release_date} </h1>
        <h1> Description: {moviePicked.description}</h1>
      </section>
    );
  }
}

export default Movies;
