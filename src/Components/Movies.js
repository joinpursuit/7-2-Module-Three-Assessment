import axios from "axios";
import { Component } from "react";

class Movies extends Component {
  state = { movies: [], selectedMovieUrl: "", selectedMovie: {} };

  fetchAllMovies = async () => {
    try {
      const res = await axios.get("https://ghibliapi.herokuapp.com/films/");
      this.setState({ movies: res.data });
    } catch (error) {
      this.setState({ movies: [] });
    }
  };

  componentDidMount() {
    this.fetchAllMovies();

   
  }

  selectMovie = async (e) => {
   
    this.setState({ selectedMovieUrl: e.target.value });
    // debugger

    try {
      const res = await axios.get(e.target.value);
      this.setState({ selectedMovie: res.data });
      console.log(res.data)
    //   object of the entire movie from url
    } catch (error) {
      this.setState({ selectedMovie: {} });
    }
  };

  render() {
    const { movies, selectedMovieUrl, selectedMovie } = this.state;
    return (
      <section>
        <h1>Select a Movie</h1>
        <select value={selectedMovieUrl} onChange={this.selectMovie}>
          <option value="" selected ></option>
          {movies.map((movieObj) => {
            return (
              <option key={movieObj.title} value={movieObj.url}>
                {movieObj.title}
              </option>
            );
          })}
        </select>
        <h1>{selectedMovie.title}</h1>
        <h2>{selectedMovie.release_date}</h2>
        <p>{selectedMovie.release_date && selectedMovie.description}</p>
 {/* title release date description */}
      </section>
    );
  }
}

export default Movies;