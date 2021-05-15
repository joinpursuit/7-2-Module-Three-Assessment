import axios from "axios";
import React from "react";

class Movies extends React.Component {
  state = { movies: [], moviePickedURL: "", moviePicked: {} };

  seeMovies = async () => {
    try {
      const res = await axios.get("https://ghibliapi.herokuapp.com/films");
      this.setState({ movies: res.data });
    } catch (error) {
      this.setState({ movies: [] });
    }
  };

  componentDidMount() {
    this.seeMovies();
  }

  pickAMovie = async (e) => {
    this.setState({ moviePickedURL: e.target.value });
    try {
      const res = await axios.get(e.target.value);
      this.setState({ moviePicked: res.data });
    } catch (error) {
      this.setState({ moviePicked: {} });
    }
  };

  render() {
    const { movies, moviePickedURL, moviePicked } = this.state;
    console.log(this.state);
    return (
      <section>
        <h1>Select a Movie</h1>
        <select value={moviePickedURL} onChange={this.pickAMovie}>
          <option value="" defaultValue></option>
          {movies.map((movie) => {
            return (
              <option key={movie.title} value={movie.url}>
                {movie.title}
              </option>
            );
          })}
        </select>
        <div>
          <h1>{moviePicked.title}</h1>
          <p>{moviePicked.release_date}</p>
          <p>{moviePicked.description}</p>
        </div>
      </section>
    );
  }
}

export default Movies;
